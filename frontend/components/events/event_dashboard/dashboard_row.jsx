import React from 'react';

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
                <img src={props.imgSrc}></img>
                <span>
                    <p>{props.title}</p>
                    <span>
                        <p>Riverhead Aquarium</p>
                        <p>{props.beginTime}</p>
                    </span>
                </span>
            </span>
            <span onClick={props.onMenuClick}>
                - - -
            </span>
        </div>
    );
}
 
export default DashboardRow;