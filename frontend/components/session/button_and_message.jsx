import React from 'react';

const ButtonAndMessage = ({ type, value, message, fontSize }) => (
    <>
        <input className="submit" type={type} value={value} />
        <span style={{ 'fontSize': fontSize }}>{ message }</span>
    </>
)

export default ButtonAndMessage;