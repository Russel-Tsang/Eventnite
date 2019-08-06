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
    }
    
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.eventId !== prevProps.match.params.eventId) {
            const { fetchEvent } = this.props;
            fetchEvent(this.props.match.params.eventId);
        }
    }

    toggleModal() {
        // if user is creator, show link to edit
        // if user is not creator, show modal
        // if user is not logged in, link to sign in form
        this.setState({ modal: true });
    }

    render() {
        const { id, title, description, tags, organizer, onlineEvent, street, state, city, begin_day, begin_month, begin_year, endDay, endMonth, endYear, begin_time, endTime } = this.props.event;
        const zipCode = this.props.event.zip_code;
        const eventTags = tags ? Object.values(tags).map((tag, idx) => <EventTag key={idx} tag={tag.tag_name} />) : '';
        const modal = this.state.modal ? <Modal onClick={() => this.props.postRegistration(id)}/> : ''

        return (
            <div className="event-show">
                {modal}
                <Banner
                    backgroundImage={window.photoBalloons}
                />
                <div className="grey-background">
                    <div className="event-show-card">
                        <Preview
                            imageSrc={window.photoBalloons}
                            eventTitle={title}
                            creator={organizer}
                            price={`45`}
                        />
                        <TicketBar 
                            onClick={this.toggleModal}
                            buttonText={"Register"}
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