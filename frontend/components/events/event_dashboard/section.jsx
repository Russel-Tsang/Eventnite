import React from 'react';
import { Link } from 'react-router-dom';

const Section = (props) => {
    let dashboardSection = props.eventChosen ? (
        <>
        <span>
            <h3>{props.heading}</h3>
        </span>
        <span>
            <p>{`${props.month} ${props.date}, ${props.year} ${props.time}`}</p>
        </span>
        <span>
            <Link to="/dashboard/all">Switch Event</Link>
        </span>
        </>
    ) : (
        <>
        <span>
            <h3>Select an</h3>
        </span>
        <span>
            <h3>Event!</h3>
        </span>
        </>
    );

    return ( 
        <section className="dashboard-section">
            {dashboardSection}
        </section>
    );
}
 
export default Section;