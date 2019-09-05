import React, { Component } from 'react';
import Banner from '../../helper_components/banner';
import Preview from '../../helper_components/event_preview';
import TicketBar from '../../helper_components/ticket_bar';
import EventDescription from '../event_details/event_description';
import { EventTags, EventTag } from '../event_details/event_tags';
import { toMonth, toTime } from '../../../util/calculations';
import Modal from '../../helper_components/modal/modal';
import MessageBar from '../../helper_components/message_bar';

class EventShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            messageBar: false,
            liked: false,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.renderEventTags = this.renderEventTags.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleMessageBar = this.handleMessageBar.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);

        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        let paragraph = document.querySelector('.description p');
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.props.fetchEvent(this.props.match.params.eventId);
        }
        if (paragraph.innerText.includes('<p>')) paragraph.outerHTML = paragraph.innerText.split("</p>").join("</p> <br>");
    }

    // re-enable scroll after user closes the modal
    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal });
    }

    handleRegistration() {
        if (!this.props.currentUser) {
            this.props.history.push('/signin');
            return;
        } 
        this.setState({ modal: !this.state.modal });
        this.props.postRegistration(this.props.event.id);
    }

    handleFollow() {
        if (!this.props.currentUser) {
            this.props.history.push('/signin');
            return;
        } 
        // if followId exists, then the current user must already be following the event
        let action = this.props.event.followId ? this.props.deleteFollow : this.props.postFollow;
        action(this.props.event.id, this.props.event.followId)
    }

    handleLikeClick(eventId) {
        return () => {
            if (!this.props.currentUser) {
                this.props.history.push('/signin');
                return;
            }
            if (this.props.likes[eventId]) {
                this.setState({ messageBar: true, liked: false });
                this.props.deleteLike(eventId, this.props.likes[eventId].likeId, "show");
            } else {
                this.setState({ messageBar: true, liked: true });
                this.props.postLike(eventId, "show");
            }
            setTimeout(() => {
                this.setState({ messageBar: false });
            }, 4000);
        }
    }

    handleMessageBar() {
        this.setState({ messageBar: false });
    }

    renderEventTags() {
        if (this.props.tags) {
            let eventTags = Object.values(this.props.tags).map((tag, idx) => <EventTag key={idx} tag={tag.tagName} />);
            return (
                <EventTags>
                    {eventTags}
                </EventTags> 
            );
        }
        return null;
    }

    render() {
        document.body.style.overflow = this.state.modal ? "hidden" : "visible";
        let messageBarShow = this.state.messageBar ? 'message-bar-show' : '';
        let { id, price, pictureUrl, title, description, organizer, street, state, city, zipCode, beginDay, beginMonth, beginYear, beginTime, venueName, onlineEvent } = this.props.event;

        pictureUrl = !pictureUrl ? `${window.splashBanner}` : pictureUrl;
        beginDay = beginDay < 10 ? `0${beginDay}` : beginDay;

        let followStatus;
        // if condition to prevent erroring out on the first render
        if (this.props.event.followerIds) {
            followStatus = this.props.event.followerIds.includes(this.props.currentUser) ? true : false;
        }

        // display modal depending on the component state
        const modal = this.state.modal ? (
            <Modal 
                eventId={id}
                closeModal={this.toggleModal} 
                onClick={this.handleRegistration} /> 
            ) : (
                null
            )
        let ticketBar; 
        let liked = this.props.likes[id] ? true : false;
        if (this.props.currentUser && this.props.currentUser.id) {
            ticketBar = <TicketBar onClick={this.toggleModal} buttonText={"Sign In"} />
        } else {
            ticketBar = this.props.event.registrationId ? (
                <TicketBar 
                    onClick={() => this.props.deleteRegistration(this.props.event.id, this.props.event.registrationId)} 
                    buttonText="Unregister" 
                    onLikeClick={this.handleLikeClick(this.props.event.id)}
                    liked={liked}
                />
            ) : (
                <TicketBar 
                    onClick={this.toggleModal} 
                    buttonText={"Register"} 
                    onLikeClick={this.handleLikeClick(this.props.event.id)}
                    liked={liked}
                />
            )
        }
        return (
            <div className="event-show">
                {modal}
                <MessageBar messageBarShow={messageBarShow} onCloseClick={this.handleMessageBar} liked={this.state.liked} />
                <Banner
                    backgroundImage={pictureUrl}
                />
                <div className="grey-background">
                    <div className="event-show-card">
                        <Preview
                            imageSrc={pictureUrl}
                            eventTitle={title}
                            creator={organizer}
                            month={toMonth(beginMonth)}
                            date={beginDay}
                            price={price}
                            onFollowClick={this.handleFollow}
                            followStatus={followStatus}
                        />
                        {ticketBar}
                        <EventDescription 
                            description={unescape(description)}
                            street={street}
                            city={city}
                            state={state}
                            venueName={venueName}
                            zipCode={zipCode}
                            refundStatus={"No Refunds"}
                            month={toMonth(beginMonth)}
                            day={beginDay}
                            year={beginYear}
                            time={toTime(beginTime)}
                            onlineEvent={onlineEvent}
                        />
                        {this.renderEventTags()}
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;