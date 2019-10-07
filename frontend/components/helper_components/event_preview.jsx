import React from 'react';
import FollowButton from '../helper_components/follow_button';

const Preview = ({ imageSrc, eventTitle, creator, price, month, date, onFollowClick, followStatus }) => {
    const renderFollowButton = () => {
        return followStatus ? (
            <FollowButton onFollowClick={onFollowClick} buttonText={'Following'}/>
        ) : (
            <FollowButton onFollowClick={onFollowClick} buttonText={'Follow'} />
        );
    }

    return ( 
        <div className="event-preview"> 
            <img className="hero-image" src={imageSrc}/>
            <div className="description-card">
                <div className="description-card-head">
                    <span>
                        <span>{month}</span>
                        <span>{date}</span>
                    </span>
                    <span>
                        <h1>{eventTitle}</h1> 
                    </span>
                    <span>
                        <p>by {creator}</p>
                        {renderFollowButton()}
                    </span>
                </div>
                <div className="description-card-price">
                    {price === 0 ? 'FREE' : `US $${price}`}
                </div>
            </div>
        </div>
    );
}
 
export default Preview;