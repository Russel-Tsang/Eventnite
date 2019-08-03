import React from 'react';
import TagButton from '../../helper_components/tag_button';

const EventTags = (props) => {
    return ( 
        <div className="event-tags">
            <span className="tags-heading">
                <h3>Tags</h3>
            </span>
            <span className="tags">
                TagButton
            </span>
        </div>
    );
}
 
export default EventTags;