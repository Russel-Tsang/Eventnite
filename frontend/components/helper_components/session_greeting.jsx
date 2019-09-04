import React from 'react';

const SessionGreeting = ({ imageSrc, alt, greetingHeaderText, greetingMessage }) => (
    <>
    <img className="greeting-icon" src={imageSrc} alt={alt} />
    <div className="session-form greeting">
        <h2>{greetingHeaderText}</h2>
        <p>{greetingMessage}</p>
    </div>
    </>
)
export default SessionGreeting