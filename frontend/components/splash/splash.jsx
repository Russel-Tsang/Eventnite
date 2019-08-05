import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';
import { toMonth } from '../../util/calculations';

class Splash extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    // *adjust to camelCase*
    render() {
        let eventCards = this.props.events.map((event, idx) => {
            let { begin_month, begin_day, title, begin_time, city, state, id } = event;
            if (!begin_month) begin_month = '';
            if (!begin_day) begin_day = '';
            if (!begin_time) begin_time = '';

            return (
                <EventCard
                    key={idx}
                    cardImage={window.photoBalloons}
                    month={toMonth(begin_month)}
                    day={"Sat"}
                    date={begin_day}
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