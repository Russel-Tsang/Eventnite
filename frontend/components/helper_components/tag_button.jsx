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
    let orange = color === "black" ? '' : 'orange-button';
    return (
        <div className={`tag-button ${orange}`}>{tag}<img onClick={onClick} src={closeIcon} /></div>
    )
}