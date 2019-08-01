import React, { Component } from 'react';

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numChars: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        debugger
        let numChars = this.state.numChars + 1;
        this.setState({numChars});
    }

    render() {
        return(
            <div className="event-container">
                <div className="event-form">
                    <h1>Basic Info</h1>
                    <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                    <input type="text" placeholder="Event Title" onChange={this.handleChange}/>
                    <span>{this.state.numChars}/75</span>
                    <div className="flex">
                        <select></select>
                        <select></select>
                    </div>             
                    <div className="flex">
                        <input type="text" placeholder="Add keywords to your event" />
                        <button>Add</button>
                    </div>                           
                    <input type="text" placeholder="Organizer" />
                </div>
                    <hr />
                <div className="event-form">
                    <h1>Location</h1>
                    <p>Help people in the area discover your event and let attendees know where to show up.</p>
                    <select></select>
                    <input placeholder="Search for Address" />
                    <hr />
                    <h1>Date and time</h1>
                    <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                    <input type="date" />
                    <input type="date" />
                    <select></select>
                    <select></select>
                </div>
            </div>
        )
    }
}

export default EventForm;