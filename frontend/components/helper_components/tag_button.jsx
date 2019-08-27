import React from 'react';

export const TagButtons = (props) => {
    return (
        <div className="tag-buttons">
            {props.children}
        </div>
        
    )
}

export const TagButton = ({ tag, onClick, color }) => {
    let closeIcon = color === "black" ? window.closeIcon : window.closeIconWhite;
    return (
        <div className="tag-button">{tag}<img onClick={onClick} src={closeIcon} /></div>
    )
}