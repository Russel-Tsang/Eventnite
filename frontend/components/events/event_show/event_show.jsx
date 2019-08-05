import React, { Component } from 'react';
import Banner from '../../helper_components/banner';
import Preview from '../../helper_components/event_preview';
import TicketBar from '../../helper_components/ticket_bar';
import EventDescription from '../event_details/event_description';
import { EventTags, EventTag } from '../event_details/event_tags';
import { toMonth, toTime } from '../../../util/calculations';

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
        const { id, title, description, tags, organizer, onlineEvent, street, state, city, begin_day, begin_month, begin_year, endDay, endMonth, endYear, begin_time, endTime } = this.props.event;
        const zipCode = this.props.event.zip_code;
        const eventTags = tags ? Object.values(tags).map(tag => <EventTag tag={tag.tag_name} />) : '';
        

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
                        <TicketBar 
                            onClick={() => this.props.postRegistration(id)}
                        />
                        <EventDescription 
                            description={description}
                            street={street}
                            city={city}
                            state={state}
                            zipCode={zipCode}
                            refundStatus={"No Refunds"}
                            month={toMonth(begin_month)}
                            day={begin_day}
                            year={begin_year}
                            time={toTime(begin_time)}

                        />
                        <EventTags>
                            {eventTags}
                        </EventTags>
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;