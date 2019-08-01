import React, { Component } from 'react';

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numChars: 0,
            title: '',
            eventType: '',
            category: '',
            tag: '',
            tags: [],
            organizer: '',
            online_event: false,
            street: '',
            city: '',
            state: '',
            zip_code: '',
            beginDay: '',
            beginMonth: '',
            beginYear: '',
            endDay: '',
            endMonth: '',
            endYear: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, payload) {
        return ({ target }) => {
            event.preventDefault();
            switch (field) {
                case 'titleText': 
                    let numChars = target.value.length;
                    this.setState({ title: target.value, numChars });
                    break;
                case 'text':
                    this.setState({ [payload]: target.value });
                    break;
                case 'select':
                    event.preventDefault();
                    this.setState({ [payload]: target.value });
                    break;
                case 'venueSelect':
                    let boolValue = target.value === 'Online' ? true : false; 
                    this.setState({ online_event: boolValue });
                    break;
                case 'date':
                    let dateArr = target.value.split('-');
                    this.setState({ [`${payload}Year`]: dateArr[0], [`${payload}Month`]: dateArr[1], [`${payload}Day`]: dateArr[2]});
            }
        }
    }

    handleSubmit(type) {
        return (event) => {
            event.preventDefault();
            switch (type) {
                case "formSubmit":
                    this.props.action(this.state);
                    break;
                case "tagSubmit":
                    debugger
                    let newTags = this.state.tags.slice();
                    newTags.push(this.state.tag);
                    this.setState({ tags: newTags, tag: '' });
                    break;
            }
        }
    }

    handleDate(event) {
        console.log(event.target.value);
    }

    render() {
        const TYPES = [
            'Type',
            'Appearance or Signing', 
            'Attraction, Camp, Trip, or Retreat', 
            'Class, Training, or Workshop',
            'Concert or Performance',
            'Conference',
            'Convention',
            'Dinner or Gala',
            'Festival or Fair'
        ]
        const CATEGORIES = [
            'Category',
            'Auto', 
            'Boat & Air', 
            'Business & Professional', 
            'Charities and Causes', 
            'Community and Culture', 
            'Family and Education'
        ]

        let types = TYPES.map((type, idx) => (
            <option key={idx}>{type}</option>
        ));

        let categories = CATEGORIES.map((category, idx) => (
            <option key={idx}>{category}</option>
        ));

        let onlineOrVenue = ['Venue', 'Online'].map((option, idx) => (
            <option key={idx}>{option}</option>            
        ));

        const times = () => {
            let times = [12];

        }

        return(
            <div className="event-container">
                <div className="event-form">
                    <h1>Basic Info</h1>
                    <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                    <input type="text" placeholder="Event Title" value={this.state.title} onChange={this.handleChange("titleText", "title")}/>
                    <span>{this.state.numChars}/75</span>
                    <div className="flex">
                        <select onChange={this.handleChange("select", "eventType")}>
                            {types}
                        </select>
                        <select onChange={this.handleChange("select", "category")}>
                            {categories}
                        </select>
                    </div>             
                    <div className="flex">
                        <input type="text" onChange={this.handleChange("text", "tag")} placeholder="Add keywords to your event" />
                        <button onClick={this.handleSubmit("tagSubmit")}>Add</button>
                    </div>                           
                    <input type="text" onChange={this.handleChange("text", "organizer")} value={this.state.organizer} placeholder="Organizer" />
                </div>
                <hr />
                <div className="event-form">
                    <h1>Location</h1>
                    <p>Help people in the area discover your event and let attendees know where to show up.</p>
                    <select onClick={this.handleChange("venueSelect")}>
                        {onlineOrVenue}
                    </select>
                    <input placeholder="Search for Address" />
                    <hr />
                    <h1>Date and time</h1>
                    <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                    <input type="date" onChange={this.handleChange("date", "begin")}/>
                    <input type="date" onChange={this.handleChange("date", "end")} />
                    <select>

                    </select>
                    <select>

                    </select>
                </div>
            </div>
        )
    }
}

export default EventForm;