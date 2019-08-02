import React from 'react';

const MessagedInput = ({ caption, placeholder, value, onChange }) => (
    <>
        <div className="input-caption">{caption}</div>
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
    </>
)  

export default MessagedInput;