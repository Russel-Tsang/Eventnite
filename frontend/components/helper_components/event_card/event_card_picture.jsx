import React from 'react';
import { Link } from 'react-router-dom';

const EventCardPicture = (props) => {
    return ( 
        <div className="event-card-picture-container">
            {props.freeTag}
            <Link to={`events/${props.eventId}`}>
                <aside className="event-card-picture"
                    style={{ backgroundImage: `url(${props.cardImage})` }}
                />
            </Link>
        </div>
    );
}
 
export default EventCardPicture;