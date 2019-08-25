import React from 'react';

const IndexRow = (props) => {
    let heartIcon = props.liked ? window.redHeartIcon : window.heartIcon;
    return (  
        <div className="index-row">
            <img className="index-row-img" src={props.pictureUrl} onClick={props.onEventClick}/>
            <div className="index-row-main">
                <div className="index-row-details">
                    <h2 className="index-row-title" onClick={props.onEventClick}>{props.title}</h2>
                    <span className="index-row-time">
                        {`${props.day}, ${props.beginMonth} ${props.beginDay}, ${props.beginTime}`}
                    </span>
                    <span className="index-row-location">
                        {`${props.venueName}, ${props.city}, ${props.state}`}
                    </span>
                    <span className="index-row-price">
                        {`Starts at $${props.price}`}
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