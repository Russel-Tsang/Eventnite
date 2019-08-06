import React from 'react';

const TicketButton = (props) => {
    return ( 
        <div 
            className="ticket-button"
            onClick={props.onClick}
        >
            {props.buttonText}
        </div>
    );
}
 
export default TicketButton;