import React from 'react';

const Section = (props) => {
    return ( 
        <section>
            <span>
                <h3>{props.heading}</h3>
            </span>
            <span>
                <p>{props.time}</p>
            </span>
            <span>
                <a>Switch Event</a>
            </span>
        </section>
    );
}
 
export default Section;