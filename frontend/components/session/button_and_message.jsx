import React from 'react';

const ButtonAndMessage = ({ type, value, message, fontSize }) => (
    <>
        <input type={type} value={value} />
        <span style={{ 'fontSize': fontSize }}>{ message }</span>
    </>
)

export default ButtonAndMessage;