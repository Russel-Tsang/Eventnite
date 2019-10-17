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
        this.handleDropdownDisplay = this.handleDropdownDisplay.bind(this);
        this.logInDemo = this.logInDemo.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleDisplay() {
        let nextState = this.state.display === 'display' ? 'display-none' : 'display';
        this.setState({ display: nextState });
    }

    handleDropdownDisplay(value) {
        return () => this.setState({ display: value });
    }

    logInDemo() {
        this.props.login({ email: 'demo@gmail.com', password: 'password'});
    }

    handleLogout() {
        this.props.history.push('/');
        this.props.logout();
    }

    render() {
        let createEvent, demoUserBtn;
        if (this.props.location.pathname != '/signin') {
            createEvent = <Link className="create-event btn" to="/create_event">Create Event</Link>;
        } 
        if (this.props.location.pathname.includes('signin')) demoUserBtn = <a className="btn" onClick={this.logInDemo}>Demo User</a>;
        const { currentUser } = this.props;
        const display = currentUser ? (
                <>
                <Link className="create-event btn" to="/create_event">Create Event</Link>
                <Link className="btn" to="/dashboard/all">My Events</Link>
                <Link className="btn" to="/favorites">Favorites</Link>
                <a className="sign-out-logo btn" onMouseEnter={this.toggleDisplay} onMouseLeave={this.toggleDisplay}>
                    <img 
                        className="dropdown-logo" 
                        src={"https://aa-file-upload-dev.s3.amazonaws.com/profile_icon.svg"} 
                    />
                </a>
                </>
        ) : (
                <>
                {createEvent}
                {demoUserBtn}
                <Link className="btn" to="/signin">Sign In</Link>
                </>
        );

        // prevents attempt to read this.props.currentUserObj upon logging out, which results in an error
        let ProfileDropdown = this.props.currentUserObj ? (
            <ProfileDropDown
                user={this.props.currentUserObj.fname}
                userEmail={this.props.currentUserObj.email}
                display={this.state.display}
                onMouseEnter={this.handleDropdownDisplay('display')}
                onMouseLeave={this.handleDropdownDisplay('display-none')}
                onLogout={this.handleLogout}
            />
        ) : null;
        
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
            {ProfileDropdown}
            </>
        );
    }    
}

export default NavBar;