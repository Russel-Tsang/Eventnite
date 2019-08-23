import React from 'react';

const CheckBar = (props) => {
    return ( 
        <a onClick={props.onClick} className={props.selectedStatus}>
            <div className="check-bar">
                <img src={window.checkIcon}/>
                {props.label}
            </div>
        </a>
    );
}
 
export default CheckBar;