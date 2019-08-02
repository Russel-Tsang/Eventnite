import React from 'react';
import TicketButton from './ticket_button';

const TicketBar = (props) => {
    return ( 
        <div className="ticket-bar">
            <div className="icons">
                <img className="share-icon" src={window.shareIcon}/>
                <img className="heart-icon" src={window.heartIcon}/>
            </div>
            <TicketButton />
        </div>
    );
}
 
export default TicketBar;