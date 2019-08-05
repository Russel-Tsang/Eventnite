import React from 'react';

export const EventTags = ({ children }) => {
    return ( 
        <div className="event-tags-div">
            <div>
                <span className="tags-heading">
                    <h3>Tags</h3>
                </span>
                <span className="tags">
                    {children}
                </span>
            </div>
        </div>
    );
}

export const EventTag = ({ tag }) => {
    return ( 
        <button className="show-tag">{tag}</button>
    );
}
 
export default EventTags;