import React, { Component } from 'react';

class EventForm extends Component {
    render() {
        return(
            <div className="event-form">
                <h1>Basic Info</h1>
                <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                <input type="text" placeholder="Event Title"/>
                <select></select> 
                <select></select>
                <input type="text" placeholder="Enter tag" />
                <button>Add</button>
                <input type="text" placeholder="Organizer"/>
                <hr />
                <h1>Location</h1>
                <select></select>
                <input placeholder="Search for Address"/>
            </div>
        )
    }
}

export default EventForm;