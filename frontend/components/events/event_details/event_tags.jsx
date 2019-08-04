import React from 'react';
import TagButton from '../../helper_components/tag_button';

export const EventTags = ({ children }) => {
    return ( 
        <div className="event-tags">
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
        <button className="tagButton">{tag}</button>
    );
}
 
export default EventTags;