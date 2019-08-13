import React from 'react';

const EventDescription = (props) => {
    // return full address or url, depending on whichever is present
    const addressOrUrl = () => {
        return props.city ? (
            <>
                <span className="location-heading">
                    <p>{props.venueName}</p>
                </span>
                <span className="location-street">
                    <p>{props.street}</p>
                </span>
                <span className="location-city-state">
                    {`${props.city}, ${props.state} ${props.zipCode}`}
                </span>
            </>
        ) : (
            <span className="location-heading">
                <p>{props.venueName}</p>
            </span>
        );
    }

    return ( 
        <div className="description-and-location">
            <div className="event-description">
                <span className="description-heading">
                    <h3>Description</h3>
                </span>
                <span className="description">
                    <p>{props.description}</p>
                </span>
            </div>
            <div className="event-details">
                <div className="event-date">
                    <span className="event-date-heading">
                        <h3>Date And Time</h3>
                    </span>
                    <span className="event-date-time">
                        <p>{`${props.month}, ${props.day}, ${props.year}, ${props.time} `}</p>
                    </span>
                </div>
                <div className="event-location">
                    <span className="location-heading">
                        <h3>Location</h3>
                    </span>
                    {addressOrUrl()}
                </div>
                <div className="event-refund">
                    <span>
                        <h3>Refund Policy</h3>
                        <p>{props.refundStatus}</p>
                    </span>
                </div>
            </div>
        </div>
    );  
}
 
export default EventDescription;