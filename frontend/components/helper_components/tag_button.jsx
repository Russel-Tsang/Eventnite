import React from 'react';

export const TagButtons = (props) => {
    return (
        <div className="tag-buttons">
            {props.children}
        </div>
        
    )
}

export const TagButton = ({ tag }) => {
    return (
        <span className="tag-button">{tag}<img src={window.closeIcon} /></span>
        
    )
}