import React from 'react';
import { Link } from 'react-router-dom';

const ButtonAndMessage = ({ type, value, message, fontSize }) => {
    let componentMessage = message === 'Log In Instead' ? (
        <Link to='/signin/login'>{`${message}`}</Link>
    ) : (
        message
    );
    return (
        <>
        <input className="submit" type={type} value={value} />
        <span style={{ 'fontSize': fontSize }}>{ componentMessage }</span>
        </>
    );
}

export default ButtonAndMessage;