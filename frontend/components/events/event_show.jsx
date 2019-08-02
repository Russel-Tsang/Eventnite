import React, { Component } from 'react';
import Banner from '../helper_components/banner';
import EventDisplay from './event_display';
import Preview from '../helper_components/event_preview';
import TicketBar from '../helper_components/ticket_bar';

class EventShow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="event-show">
                <Banner
                    backgroundImage={window.photoBalloons}
                />
                <div className="event-card">
                    <Preview
                        imageSrc={window.photoBalloons}
                        descriptionHeader={`This is a Test Header `}
                        creator={`by Test Creator`}
                        price={`45`}
                    />
                    <TicketBar />
                </div>
                
            </div>
        )
    }
}

export default EventShow;