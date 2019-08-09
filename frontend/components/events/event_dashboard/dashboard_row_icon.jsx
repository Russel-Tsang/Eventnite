import React from 'react';

const DashboardRowIcon = (props) => {
    return (
        <span onClick={props.onMenuClick}>
            <img className="menu_icon" src="https://aa-file-upload-dev.s3.amazonaws.com/menu_icon.svg" />
        </span>
    );
}
 
export default DashboardRowIcon;