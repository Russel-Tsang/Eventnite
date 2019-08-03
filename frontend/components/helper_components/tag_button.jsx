import React from 'react';

export const TagButtons = (props) => {
    return (
        <div className="tag-buttons">
            {props.children}
        </div>
        
    )
}

export const TagButton = ({ tag, onClick }) => {
    return (
        <div className="tag-button">{tag}<img onClick={onClick} src={window.closeIcon} /></div>
        
    )
}