import React from 'react';
import TicketButton from './ticket_button';

const TicketBar = (props) => {
    let heartIcon = props.liked ? window.redHeartIcon : window.heartIcon;
    return ( 
        <div className="ticket-bar">
            <div className="icons">
                <img onClick={props.onLikeClick} className="heart-icon" src={heartIcon}/>
            </div>
            <TicketButton 
                onClick={props.onClick}
                buttonText={props.buttonText}
            />
        </div>
    );
}
 
export default TicketBar;