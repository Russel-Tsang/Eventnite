import React from 'react';

const EventDescription = (props) => {
    return ( 
        <div className="description-and-location">
            <div className="description">
                <span className="description-heading">
                    <h3>Description</h3>
                </span>
                <span className="description">
                    <p>{props.description}</p>
                </span>
            </div>
            <div className="location">
                <span className="location-heading">
                    <h3>Location</h3>
                </span>
                <span className="location-street">
                    <p>{props.street}</p>
                </span>
                <span className="location-city-state">
                    {`${props.city}, ${props.state} ${props.zipCode}`}
                </span>
            </div>
            <div className="refund">
                <span>
                    <h3>Refund Policy</h3>
                    <p>{props.refundStatus}</p>
                </span>
            </div>
        </div>
    );  
}
 
export default EventDescription;