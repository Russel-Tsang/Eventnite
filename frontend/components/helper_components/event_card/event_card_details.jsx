import React from 'react';
import EventCardButtons from './event_card_buttons';
import { Link } from 'react-router-dom';

const EventCardDetails = (props) => {
    return ( 
        <main className="event-card-details">
            <EventCardButtons onLikeClick={props.onLikeClick} heartIconImg={props.heartIconImg} />
            <div className="splash-card-details flex">
                <div className="date-span">
                    <span className="month">
                        {props.month}
                    </span>
                    <span className="date">
                        {props.date}
                    </span>
                </div>
                <div className="card-details">
                    <Link to={`events/${props.eventId}`}>
                        <span className="card-title">
                            {props.title}
                        </span>
                    </Link>
                    <span className="card-date-time">
                        {`${props.day}, ${props.month} ${props.date}, ${props.time}`}
                    </span>
                    <span className="event-card-location">
                        {props.addressOrUrl}
                    </span>
                    <span className="card-price">
                        {props.price === 0 ? 'FREE' : `Starts at $${props.price}.00`}
                    </span>
                </div>
            </div>
        </main>
    );
}
 
export default EventCardDetails;