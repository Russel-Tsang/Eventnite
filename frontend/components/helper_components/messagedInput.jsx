import React from 'react';

const MessagedInput = ({ caption, placeholder, value, onChange }) => {
    return (
        <div className="message-input">
            <div className="input-caption">{caption}</div>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange} 
            />
        </div>
    )
}  

export default MessagedInput;