import React from 'react';

const DashboardRow = (props) => {
    return (  
        <div className="dashboard-row">
            <span>
                sep32
                <img src={props.imgSrc}></img>
                <span>
                    <p>Grad Party</p>
                    <span>
                        <p>Riverhead Aquarium</p>
                        <p>1:00 PM</p>
                    </span>
                </span>
            </span>
            <span>
                - - -
            </span>
        </div>
    );
}
 
export default DashboardRow;