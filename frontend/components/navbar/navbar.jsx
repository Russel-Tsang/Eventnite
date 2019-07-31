import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Log In</Link>
                <Link className="btn" to="/signin">Sign In</Link>
            </div>
        );
    return (
        <header className="navbar">
            <h1 className="logo">EVENTNITE</h1>
            <div>
                <div className="navbar-right">
                    {display}
                </div>
            </div>
        </header>
    )
}

export default NavBar;