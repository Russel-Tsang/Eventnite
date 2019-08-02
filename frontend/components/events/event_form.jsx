import React, { Component } from 'react';
import MessagedInput from '../helper_components/messagedInput';

class EventForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

        return(
            <div className="event-container">
                <div className="event-form">
                    <h1>Basic Info</h1>
                    <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                    <MessagedInput
                        caption="Event Title" 
                        placeholder="Be clear and descriptive." 
                        value={this.state.title} 
                        onChange={this.handleChange("text", "title")}
                    />
                    <span>
                        {this.state.title.length}/75
                    </span>
                    <div className="flex">
                        <select onChange={this.handleChange("select", "eventType")}>
                            {types}
                        </select>
                        <select onChange={this.handleChange("select", "category")}>
                            {categories}
                        </select>
                    </div>     
                    <MessagedInput
                        onChange={this.handleChange("text", "tag")}
                        placeholder="Add keywords to your event"
                        caption="Tags" 
                    />        
                    <div className="button-1" onClick={this.handleSubmit("tagSubmit")}>Add</div>                       
                    <div className="tag-span">
                        <div className="tag-span-item">{`${this.state.tags.length}/10 tags.`}</div>
                        <div className="spacer-div"></div>
                        <div className="tag-span-item">{`${this.state.tag.length}/75`}</div>
                    </div>
                    <MessagedInput 
                        onChange={this.handleChange("text", "organizer")} 
                        value={this.state.organizer} 
                        placeholder="Tell attendees who is organizing this event." 
                        caption="Organizer"
                    />
                    <span>
                        {this.state.organizer.length}/75
                    </span>
                </div>
                <hr />
                <div className="event-form">
                    <h1>Location</h1>
                    <p>Help people in the area discover your event and let attendees know where to show up.</p>
                    <select onClick={this.handleChange("venueSelect")}>
                        {onlineOrVenue}
                    </select>
                    <input placeholder="Search for Address" />
                </div>
                <hr />
                <div className="event-form">
                    <h1>Date and time</h1>
                    <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                    <div className="date-time">
                        <input 
                            type="date" 
                            onChange={this.handleChange("date", "begin")} />
                        <select>
                        </select>
                        <input 
                            type="date" 
                            onChange={this.handleChange("date", "end")} />
                        <select>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventForm;