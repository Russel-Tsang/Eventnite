import React from 'react';

const TicketButton = (props) => {
    return ( 
        <div 
            className="ticket-button"
            onClick={props.onClick}
        >
            Tickets
        </div>
    );
}
 
export default TicketButton;