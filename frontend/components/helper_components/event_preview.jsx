import React from 'react';
import FollowButton from '../helper_components/follow_button';

const Preview = (props) => {
    return ( 
        <div className="event-preview"> 
            <img className="hero-image" src={props.imageSrc}/>
            <div className="description-card">
                <div className="description-card-head">
                    <span>
                        <h1>{props.descriptionHeader}</h1> 
                    </span>
                    <span>
                        <p>{props.creator}</p>
                        <FollowButton />
                    </span>
                </div>
                <div className="description-card-price">
                    {`US $${props.price}`}
                </div>
            </div>
        </div>
    );
}
 
export default Preview;