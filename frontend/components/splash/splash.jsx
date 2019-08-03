import React, { Component } from 'react';
import EventCard from '../helper_components/event_card';

class Splash extends Component {
    render() {
        return (
            // image provided by unsplash
            <div id="body">
                <img className="splash-banner" src={window.splashBanner} /> 
                <EventCard 
                    cardImage={window.photoBalloons}
                    month={"Aug"}
                    day={"Sun"}
                    date={"24"}
                    title={"Grad Party"}
                    time={"12:00PM"}
                    venueName={"Blue Casino"}
                    city={"Queens"}
                    state={"NY"}
                    price={"60"}
                />
            </div>
        )
    }
}

export default Splash;