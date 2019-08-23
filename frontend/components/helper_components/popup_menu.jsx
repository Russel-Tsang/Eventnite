import React from 'react';

const PopupMenu = (props) => {
    return (  
        <div className={`popup-menu ${props.displayClass}`}>
            <span className='popup-menu-button' onClick={props.onEditClick}>
                Edit
            </span>
            <span className='popup-menu-button' onClick={props.onDeleteClick}>
                Delete
            </span>
        </div>
    );
}
 
export default PopupMenu;