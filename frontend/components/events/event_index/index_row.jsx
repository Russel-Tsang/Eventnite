import React from 'react';

const IndexRow = (props) => {
    let heartIcon = props.liked ? window.redHeartIcon : window.heartIcon;

    let location = props.onlineEvent ? (
        `${props.venueName}`
    ) : (
        `${props.venueName}, ${props.city}, ${props.state}`
    );
    
    return (  
        <div className="index-row" onMouseEnter={props.handleMouseEnter}>
            <img className="index-row-img" src={props.pictureUrl} onClick={props.onEventClick}/>
            <div className="index-row-main">
                <div className="index-row-details">
                    <h2 className="index-row-title" onClick={props.onEventClick}>{props.title}</h2>
                    <span className="index-row-time">
                        {`${props.day}, ${props.beginMonth} ${props.beginDay}, ${props.beginTime}`}
                    </span>
                    <span className="index-row-location">
                        {location}
                    </span>
                    <span className="index-row-price">
                        {props.price === 0 ? 'FREE' : `Starts at $${props.price}`}
                    </span>
                </div>
                <div className="index-row-like">
                    <img className="heart-icon" src={heartIcon} onClick={props.onLikeClick}/>
                </div>
            </div>
        </div>
    );
}
 

export default IndexRow;