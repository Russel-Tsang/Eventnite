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
    }
    
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            this.props.fetchEvent(this.props.match.params.eventId);
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal });
    }

    handleRegistration(id) {
        return () => {
            this.setState({ modal: !this.state.modal });
            this.props.postRegistration(id);
        }
    }

    renderEventTags() {
        debugger
        if (this.props.event.tags) {
            let eventTags = Object.values(this.props.event.tags).map((tag, idx) => <EventTag key={idx} tag={tag.tag_name} />);
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
        
        let { id, pictureUrl, title, description, tags, organizer, onlineEvent, street, state, city, begin_day, begin_month, begin_year, endDay, endMonth, endYear, begin_time, endTime, venue_name } = this.props.event;
        // temporary fix: if there is no physical location, show the online Url
        if (!street) {
            street = venue_name;
            state = '';
            city = '';
        }
        pictureUrl = !pictureUrl ? `${window.splashBanner}` : pictureUrl;
        const zipCode = this.props.event.zip_code;
        const eventTags = tags ? Object.values(tags).map((tag, idx) => <EventTag key={idx} tag={tag.tag_name} />) : '';

        // display modal depending on the component state
        const modal = this.state.modal ? (
            <Modal 
                eventId={id}
                closeModal={this.toggleModal} 
                onClick={this.handleRegistration(id)} /> 
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
                            month={toMonth(begin_month)}
                            date={begin_day}
                            price={`45`}
                        />
                        {ticketBar}
                        <EventDescription 
                            description={description}
                            street={street}
                            city={city}
                            state={state}
                            venueName={venue_name}
                            zipCode={zipCode}
                            refundStatus={"No Refunds"}
                            month={toMonth(begin_month)}
                            day={begin_day}
                            year={begin_year}
                            time={toTime(begin_time)}
                        />
                        {this.renderEventTags()}
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;