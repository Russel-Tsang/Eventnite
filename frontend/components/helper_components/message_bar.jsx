import React from 'react';

const MessageBar = (props) => {
    let message = props.liked ? 'Event added to likes' : 'Event removed from likes';
    return (  
        <div className={`message-bar ${props.messageBarShow}`}>
            <span>{message}</span>
            <span onClick={props.onCloseClick}>'X'</span>
        </div>
    );
}
 
export default MessageBar;