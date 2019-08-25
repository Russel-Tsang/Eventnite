import React from 'react';

const MessageBar = (props) => {
    let message = props.liked ? 'Event added to Likes' : 'Event removed from Likes';
    let checkImg = props.liked ? <img src={window.checkIconBlack} /> : null;
    return (  
        <div className={`message-bar ${props.messageBarShow}`}>
            <span>
                {checkImg}
                {message}
            </span>
            <span className="close-icon-span" onClick={props.onCloseClick}>
                <img className="close-icon" src={window.closeIcon} />
            </span>
        </div>
    );
}
 
export default MessageBar;