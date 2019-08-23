import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from '../helper_components/profile_dropdown';

class NavBar extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            display: 'display-none'
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.displayNone = this.displayNone.bind(this);
        this.displayTrue = this.displayTrue.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleDisplay() {
        let nextState = this.state.display === 'display' ? 'display-none' : 'display';
        this.setState({ display: nextState });
    }

    displayNone() {
        this.setState({ display: 'display-none' });
    }

    displayTrue() {
        this.setState({ display: 'display' });
    }

    handleLogout() {
        this.props.history.push('/');
        this.props.logout();
    }

    render() {
        let createEvent = '';
        if (this.props.location.pathname != '/signin') {
            createEvent = <Link className="create-event btn" to="/create_event">Create Event</Link>;
        }
        const { currentUser } = this.props;
        const display = currentUser ? (
                <>
                <Link className="btn" to="/dashboard/all">My Events</Link>
                <Link className="create-event btn" to="/create_event">Create Event</Link>
                <Link className="sign-out-logo btn" to="/" onMouseEnter={this.toggleDisplay} onMouseLeave={this.toggleDisplay}>
                    <img 
                        className="dropdown-logo" 
                        src={"https://aa-file-upload-dev.s3.amazonaws.com/profile_icon.svg"} 
                    />
                </Link>
                </>
        ) : (
                <>
                {createEvent}
                <Link className="btn" to="/signin">Sign In</Link>
                </>
        );

        // prevents attempt to read this.props.currentUserObj upon logging out, which results in an error
        const ProfileDropdown = () => {
            if (this.props.currentUserObj) {
                return (
                    <ProfileDropDown 
                        user={this.props.currentUserObj.fname} 
                        userEmail={this.props.currentUserObj.email} 
                        display={this.state.display} 
                        onMouseEnter={this.displayTrue} 
                        onMouseLeave={this.displayNone} 
                        onLogout={this.handleLogout}
                    />
                )
            } else {
                return null
            }
        }
        

        return (
            <>
            <header className="navbar">
                <Link to="/">
                        <img src={"https://aa-file-upload-dev.s3.amazonaws.com/eventnite_logo.png"} className="logo" />
                </Link>
                <div className="navbar-right">
                    {display}
                </div>
            </header>
            {ProfileDropdown()}
            </>
        );
    }    
}

export default NavBar;