import React from 'react';
import { toTime } from '../../../util/calculations'

const DashboardRow = (props) => {
    return (  
        <div className="dashboard-row">
            <span>
                <span className="row-date">
                    <span>
                        {props.beginMonth}
                    </span>
                    <span>
                        {props.beginDay}
                    </span>
                </span>
                <img src={props.imgSrc} onClick={props.onClick}></img>
                <span>
                    <span>{props.title}</span>
                    <span>
                        <p>{props.venueName}</p>
                        <p>{toTime(props.beginTime)}</p>
                    </span>
                </span>
            </span>
            <span onClick={props.onMenuClick}>
                <img className="menu_icon" src="https://aa-file-upload-dev.s3.amazonaws.com/menu_icon.svg" />
            </span>
        </div>
    );
}
 
export default DashboardRow;