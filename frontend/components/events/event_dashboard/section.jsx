import React from 'react';
import { Link } from 'react-router-dom';

const Section = (props) => {
    return ( 
        <section className="dashboard-section">
            <span>
                <h3>{props.heading}</h3>
            </span>
            <span>
                <p>{`${props.month} ${props.date}, ${props.year} ${props.time}`}</p>
            </span>
            <span>
                <Link to="/dashboard/all">Switch Event</Link>
            </span>
        </section>
    );
}
 
export default Section;