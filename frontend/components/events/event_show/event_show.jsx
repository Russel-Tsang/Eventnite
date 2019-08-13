import React, { Component } from 'react';
import Banner from '../../helper_components/banner';
import Preview from '../../helper_components/event_preview';
import TicketBar from '../../helper_components/ticket_bar';
import EventDescription from '../event_details/event_description';
import { EventTags, EventTag } from '../event_details/event_tags';
import { toMonth, toTime } from '../../../util/calculations';
import Modal from '../../helper_components/modal/modal';

class EventShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.renderEventTags = this.renderEventTags.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.props.fetchEvent(this.props.match.params.eventId);
        }
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
        
        let { id, price, pictureUrl, title, description, tags, organizer, street, state, city, zipCode, beginDay, beginMonth, beginYear, endDay, endMonth, endYear, beginTime, endTime, venueName } = this.props.event;

        pictureUrl = !pictureUrl ? `${window.splashBanner}` : pictureUrl;

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
        if (this.props.currentUser && this.props.currentUser.id) {
            ticketBar = <TicketBar onClick={this.toggleModal} buttonText={"Sign In"} />
        } else {
            ticketBar = this.props.event.registrationId ? <TicketBar onClick={() => this.props.deleteRegistration(this.props.event.id, this.props.event.registrationId)} buttonText="Unregister" /> : <TicketBar onClick={this.toggleModal} buttonText={"Register"} />
        }

        return (
            <div className="event-show">
                {modal}
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
                            description={description}
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
                        />
                        {this.renderEventTags()}
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;