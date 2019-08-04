import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';

class Splash extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    // *adjust to camelCase*
    render() {
        let eventCards = this.props.events.map(event => {
            let { begin_month, begin_date, title, begin_time, city, state, id } = event;
            return (
                <EventCard
                    cardImage={window.photoBalloons}
                    month={begin_month}
                    day={"Sat"}
                    date={begin_date}
                    title={title}
                    time={begin_time}
                    venueName={"Blue Casino"}
                    city={city}
                    state={state}
                    price={"60"}
                    eventId={id}
                />
            );
        });

        return (
            // image provided by unsplash
            <div id="body">
                <img className="splash-banner" src={window.splashBanner} /> 
                <EventCards>
                    {eventCards}
                </EventCards>
            </div>
        )
    }
}

export default Splash;