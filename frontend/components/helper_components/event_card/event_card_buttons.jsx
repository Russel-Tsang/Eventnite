import React from 'react';

const EventCardButtons = (props) => {
    return ( 
        <div className="card-buttons">
            <button className="event-card-button" onClick={props.onLikeClick}>
                <img className="card-button-img" src={props.heartIconImg} />
            </button>
        </div>
    );
}
 
export default EventCardButtons;