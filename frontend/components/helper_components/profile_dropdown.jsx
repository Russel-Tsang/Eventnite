import React from 'react';

const ProfileDropdown = (props) => {
    return ( 
        <div className={`profile-dropdown ${props.display}`} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <span>{props.user}</span>
            <span>{props.userEmail}</span>
            <span>{"Manage Events"}</span>
            <span>{"Liked"}</span>
            <span onClick={props.onLogout}>{"Log out"}</span>
        </div>
    );
}
 
export default ProfileDropdown;