import React from 'react';
import TicketButton from './ticket_button';

const TicketBar = (props) => {
    return ( 
        <div className="ticket-bar">
            <div className="icons">
                <img className="share-icon" src={window.shareIcon}/>
                <img className="heart-icon" src={window.heartIcon}/>
            </div>
            <TicketButton 
                onClick={props.onClick}
                buttonText={props.buttonText}
            />
        </div>
    );
}
 
export default TicketBar;