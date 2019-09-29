import React from 'react';
import { Link } from 'react-router-dom';

const NoEvents = (props) => {
    let categorySuggestion = props.category ? ` ${props.category}` : '';
    let daySuggestion = props.day ? (
        <>{` for `}<span className="orange">{props.day}</span></>
    ) : '';

    return (  
        <div className="no-events">
            <p>Whoops! No events.</p>
            <p>Make {'AEIOU'.includes(props.category[0]) ? 'an' : 'a'}<span className="orange">{categorySuggestion}</span> event{daySuggestion}?</p> 
            <Link className="button-1" to={{ pathname: "/create_event", state: { day: props.day, category: props.category } }}>
                Create Event
            </Link>
        </div>
    );
}
 
export default NoEvents;