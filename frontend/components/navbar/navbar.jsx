import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <Link className="btn" to="/create_event">Create Event</Link>
                <Link className="btn" onClick={logout}>Logout</Link>
            </div>
        ) : (
                <div>
                    <Link className="btn" to="/create_event">Create Event</Link>
                    <Link className="btn" to="/signin">Sign In</Link>
                </div>
        );

        return (
            <header className="navbar">
                <img src={window.logoWhiteFull} className="logo" />
                <div>
                    <div className="navbar-right">
                        {display}
                    </div>
                </div>
            </header>
        );
    }    
}

export default NavBar;