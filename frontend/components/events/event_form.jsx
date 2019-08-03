import React, { Component } from 'react';
import MessagedInput from '../helper_components/messagedInput';
import { TagButton, TagButtons }from '../helper_components/tag_button';

class EventForm extends Component {
    constructor(props) {
        super(props)

        // begin time and end time data stored as minutes after 12am
        this.state = {
            title: '',
            eventType: '',
            category: '',
            tag: '',
            tags: [],
            organizer: '',
            onlineEvent: false,
            street: '',
            city: '',
            state: '',
            zipCode: '',
            beginDay: '',
            beginMonth: '',
            beginYear: '',
            endDay: '',
            endMonth: '',
            endYear: '',
            beginTime: '',
            endTime: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type, payload) {
        return ({ target }) => {
            event.preventDefault();
            switch (type) {
                case 'text':
                    this.setState({ [payload]: target.value });
                    break;
                case 'select':
                    this.setState({ [payload]: target.value });
                    break;
                case 'venueSelect':
                    let boolValue = target.value === 'Online' ? true : false; 
                    this.setState({ onlineEvent: boolValue });
                    break;
                case 'date':
                    let dateArr = target.value.split('-');
                    this.setState({ [`${payload}Year`]: dateArr[0], [`${payload}Month`]: dateArr[1], [`${payload}Day`]: dateArr[2]});
                    break;
                case 'time':
                    debugger
                    let time = this.handleTime(target.value);
                    this.setState({[`${payload}Time`]: time});
                    break;
                case 'address':
                    if (target.value.split(',').length === 4) {
                        let [street, city, state, zipCode] = this.handleAddress(target.value);
                        this.setState({ street, city, state, zipCode });
                    }   
                    break;
                case 'deleteTag': 
                    let tags = this.state.tags.filter(tag => tag !== payload);
                    this.setState({ tags });
                    break;
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
                    if (!this.state.tag.length) break;
                    let newTags = this.state.tags.slice();
                    newTags.push(this.state.tag);
                    this.setState({ tags: newTags, tag: '' });
                    break;
            }
        }
    }

    // converts time as string into integer representing number of minutes past midnight
    handleTime(timeStr) {
        let hour = Number(timeStr.slice(0, timeStr.indexOf(":")));
        let pastNoon = timeStr[timeStr.length - 2] === "P" ? true : false;
        let halfHour = timeStr[timeStr.length - 5] === "3" ? true : false;
        let newTime;
        if (hour === 12 && !pastNoon) {
            newTime = 0;
        } else if (!pastNoon || hour === 12 && pastNoon) {
            newTime = hour * 60;
        } else {
            newTime = hour * 60 + 720;
        }
        if (halfHour) newTime += 30;
        return newTime;
    }

    handleAddress(address) {
        let [street, city, state, zipCode] = address.split(',');
        [street, city, state, zipCode] = [street.trim(), city.trim(), state.trim(), zipCode.trim()];
        return [street, city, state, zipCode];
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

        const TIMES = [
            "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
        ]

        let types = TYPES.map((type, idx) => (
            <option key={idx}>{type}</option>
        ));

        let categories = CATEGORIES.map((category, idx) => (
            <option key={idx}>{category}</option>
        ));

        // generate TagButton components for TagButtons component
        let tags = this.state.tags.map(tag => <TagButton onClick={this.handleChange("deleteTag", `${tag}`)} tag={tag} />)

        // create option tags with all possible times
        let times = TIMES.map((time, idx) => (
            <>
                <option key={`${idx}-0`}>{`${time}:00 AM`}</option>
                <option key={`${idx}-1`}>{`${time}:30 AM`}</option>
            </>
        )).concat(TIMES.map((time, idx) => (
            <>
                <option key={`${idx}-2`}>{`${time}:00 PM`}</option>
                <option key={`${idx}-3`}>{`${time}:30 PM`}</option>
            </>
        )));

        let onlineOrVenue = ['Venue', 'Online'].map((option, idx) => (
            <option key={idx}>{option}</option>            
        ));

        return(
            <div className="event-container">
                <div className="event-form">
                    <div className="section-head flex">
                        <img className="icon" src={window.textIcon} />
                        <h1>Basic Info</h1>
                    </div>
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
                    <div className="flex">
                        <MessagedInput
                            onChange={this.handleChange("text", "tag")}
                            value={this.state.tag}
                            placeholder="Add keywords to your event"
                            caption="Enter Tag" 
                        />        
                        <div className="button-1" onClick={this.handleSubmit("tagSubmit")}>Add</div>                       
                    </div>    
                    <div className="tag-counts flex">
                        <div className="tag-span-item">{`${this.state.tags.length}/10 tags.`}</div>
                        <div className="tag-span-item">{`${this.state.tag.length}/75`}</div>
                    </div>
                    <TagButtons>
                        {tags}
                    </TagButtons>
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
                    <div className="section-head flex">
                        <img className="icon" src={window.mapIcon} />
                        <h1>Location</h1>
                    </div>   
                    <p>Help people in the area discover your event and let attendees know where to show up.</p>
                    <select onChange={this.handleChange("venueSelect")}>
                        {onlineOrVenue}
                    </select>
                    <input id="address-search" placeholder="Search for Address" onChange={this.handleChange("address")}/>
                </div>
                <hr />
                <div className="event-form">
                    <div className="section-head flex">
                        <img className="icon" src={window.calendarIcon} />
                        <h1>Date and Time</h1>
                    </div>   
                    <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                    <div className="date-time">
                        <input 
                            type="date" 
                            onChange={this.handleChange("date", "begin")} 
                        />
                        <select onChange={this.handleChange("time", "begin")}>
                            {times}
                        </select>
                        <input 
                            type="date" 
                            onChange={this.handleChange("date", "end")} 
                        />
                        <select onChange={this.handleChange("time", "end")}>
                            {times}
                        </select>
                    </div>
                </div>
                <button className="button-1" onClick={this.handleSubmit("formSubmit")} />
                <div className="spacer" />
            </div>
        )
    }
}

export default EventForm;