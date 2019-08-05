import React from 'react';
import { Link } from 'react-router-dom';

const CheckBar = (props) => {
    return ( 
        <a onClick={props.onClick}>
            <div className="check-bar">
                <img src={window.checkIcon}/>
                {props.label}
            </div>
        </a>
    );
}
 
export default CheckBar;