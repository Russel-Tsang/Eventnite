import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';
import { toMonth } from '../../util/calculations';

class Splash extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    // *adjust to camelCase*
    render() {
        debugger
        let eventCards = this.props.events.map((event, idx) => {
            let { begin_month, begin_day, title, begin_time, city, state, id, price, pictureUrl } = event;
            if (!begin_month) begin_month = '';
            if (!begin_day) begin_day = '';
            if (!begin_time) begin_time = '';
            let cardImage = pictureUrl || window.photoBalloons

            return (
                <EventCard
                    key={idx}
                    cardImage={cardImage}
                    month={toMonth(begin_month)}
                    day={"Sat"}
                    date={begin_day}
                    title={title}
                    time={begin_time}
                    venueName={"Blue Casino"}
                    city={city}
                    state={state}
                    price={price}
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
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Splash;