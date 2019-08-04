import React, { Component } from 'react';
import Banner from '../../helper_components/banner';
import Preview from '../../helper_components/event_preview';
import TicketBar from '../../helper_components/ticket_bar';
import EventDescription from '../event_details/event_description';
import { EventTags, EventTag } from '../event_details/event_tags';

class EventShow extends Component {
    
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            const { fetchEvent } = this.props;
            fetchEvent(this.props.match.params.eventId);
        }
    }

    render() {
        const { title, description, tags, organizer, onlineEvent, street, state, city, beginDay, beginMonth, beginYear, endDay, endMonth, endYear, beginTime, endTime } = this.props.event;
        const zipCode = this.props.event.zip_code;
        debugger
        return (
            <div className="event-show">
                <Banner
                    backgroundImage={window.photoBalloons}
                />
                <div className="grey-background">
                    <div className="event-show-card">
                        <Preview
                            imageSrc={window.photoBalloons}
                            eventTitle={title}
                            creator={`by Test Creator`}
                            price={`45`}
                        />
                        <TicketBar />
                        <EventDescription 
                            description={description}
                            street={street}
                            city={city}
                            state={state}
                            zipCode={zipCode}
                            refundStatus={"No Refunds"}
                        />
                        <EventTags>
                            <EventTag tag="test" />
                        </ EventTags>
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;