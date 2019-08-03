import React, { Component } from 'react';
import Banner from '../helper_components/banner';
import Preview from '../helper_components/event_preview';
import TicketBar from '../helper_components/ticket_bar';
import EventDescription from './event_details/event_description';


class EventShow extends Component {
    
    // componentDidMount() {
    //     this.props.fetchEvent();
    // }

    render() {
        return (
            <div className="event-show">
                <Banner
                    backgroundImage={window.photoBalloons}
                />
                <div className="grey-background">
                    <div className="event-show-card">
                        <Preview
                            imageSrc={window.photoBalloons}
                            descriptionHeader={`This is a Test Header `}
                            creator={`by Test Creator`}
                            price={`45`}
                        />
                        <TicketBar />
                        <EventDescription 
                            description={"This is the best description I have gotten since I have been created. This is the best description."}
                            street={"23rd Street"}
                            city={"New York"}
                            state={"NY"}
                            zipCode={"11201"}
                            refundStatus={"No Refunds"}
                        />
                    </div>
                </div>  
            </div>
        )
    }
}

export default EventShow;