import React from 'react';

const ProfileDropdown = (props) => {
    return ( 
        <div className="profile-dropdown">
            <span>{props.user}</span>
            <span>{props.userEmail}</span>
            <span>{"Manage Events"}</span>
            <span>{"Liked"}</span>
            <span>{"Log out"}</span>
        </div>
    );
}
 
export default ProfileDropdown;