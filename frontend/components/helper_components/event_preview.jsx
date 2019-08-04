import React from 'react';
import FollowButton from '../helper_components/follow_button';

const Preview = ({ imageSrc, eventTitle, creator, price }) => {
    return ( 
        <div className="event-preview"> 
            <img className="hero-image" src={imageSrc}/>
            <div className="description-card">
                <div className="description-card-head">
                    <span>
                        <h1>{eventTitle}</h1> 
                    </span>
                    <span>
                        <p>{creator}</p>
                        <FollowButton />
                    </span>
                </div>
                <div className="description-card-price">
                    {`US $${price}`}
                </div>
            </div>
        </div>
    );
}
 
export default Preview;