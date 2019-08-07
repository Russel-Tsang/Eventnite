import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from '../helper_components/profile_dropdown';

class NavBar extends Component {
    constructor(props) {
        super(props) 
        let initialState = this.props.currentUser ? true : false;
        this.state = {
            display: initialState
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState({ display: !this.state.display })
    }

    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <Link className="btn" to="/dashboard">My Events</Link>
                <Link className="btn" to="/create_event">Create Event</Link>
                <Link className="btn" to="/" onClick={logout} onMouseEnter={this.toggleDisplay} onMouseLeave={this.toggleDisplay}>
                    <img 
                        className="dropdown-logo" 
                        src={window.dropdownIcon} 
                    />
                </Link>
            </div>
        ) : (
                <div>
                    <Link className="btn" to="/signin">Sign In</Link>
                </div>
        );
        const dropdown = this.state.display ? <ProfileDropDown user={this.props.currentUserObj.fname} userEmail={this.props.currentUserObj.email}/> : null;

        return (
            <>
            <header className="navbar">
                <Link to="/">
                    <img src={window.logoWhiteFull} className="logo" />
                </Link>
                <div>
                    <div className="navbar-right">
                        {display}
                    </div>
                </div>
            </header>
            {dropdown}
            </>
        );
    }    
}

export default NavBar;