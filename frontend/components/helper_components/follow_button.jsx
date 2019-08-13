import React from 'react';

const FollowButton = (props) => {
    return ( 
        <button className="follow-button" onClick={props.onFollowClick}>{props.buttonText}</button>
     );
}
 
export default FollowButton;