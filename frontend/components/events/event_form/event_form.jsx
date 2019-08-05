import React, { Component } from 'react';
import MessagedInput from '../../helper_components/messagedInput';
import { TagButton, TagButtons }from '../../helper_components/tag_button';
import SubmitBar from '../../helper_components/submit_bar';
import { toMinutes } from '../../../util/calculations';
import { withRouter } from 'react-router-dom'; 

class EventForm extends Component {
    constructor(props) {
        super(props)
        const { title, category, tags, eventType, organizer } = this.props.event || '';

        // begin time and end time data stored as minutes after 12am
        this.state = {
            formType: this.props.formType,
            eventId: this.props.eventId,
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // receive action object from fetchEvent thunk action creator, extracting event from action 
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId).then(
            (action) => {
                const { event: { title, event_type, category, tags, organizer, online_event, street, state, city, zip_code, begin_day, begin_month, begin_year, end_day, end_month, end_year, begin_time, end_time, description, id } } = action;
                let currentTags = Object.values(tags).map(tag => tag.tag_name);
                this.setState({ title, eventType: event_type, category, tags: currentTags, organizer, onlineEvent: online_event, street, state, city, zipCode: zip_code, beginDay: begin_day, beginMonth: begin_month, beginYear: begin_year, endDay: end_day, endMonth: end_month, endYear: end_year, beginTime: begin_time, endTime: end_time, description, eventId: id });
            }
        );
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
                debugger
                    let dateArr = target.value.split('-');
                    this.setState({ [`${payload}Year`]: dateArr[0], [`${payload}Month`]: dateArr[1], [`${payload}Day`]: dateArr[2]});
                    break;
                case 'time':
                    let time = toMinutes(target.value);
                    this.setState({[`${payload}Time`]: time});
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
                    // post or update event depending on the formType
                    let action = this.state.formType === "Update" ? this.props.updateEvent : this.props.postEvent;
                    const { title, eventType, category, tags, organizer, onlineEvent, street, state, city, zipCode, beginDay, beginMonth, beginYear, endDay, endMonth, endYear, beginTime, endTime } = this.state;
                    let requestParams = { title, event_type: eventType, category, tags, organizer, online_event: onlineEvent, street, state, city, zip_code: zipCode, begin_day: beginDay, begin_month: beginMonth, begin_year: beginYear, end_day: endDay, end_month: endMonth, end_year: endYear, begin_time: beginTime, end_time: endTime, user_id: this.props.currentUser, description: "test description", id: this.state.eventId }
                    action(requestParams).then(
                        (action) => {
                            const { event } = action
                            this.props.history.push(`/dashboard/${event.id}`)
                        }
                    );
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


    // ensures no leading/trailing whitespace
    handleAddress(address) {
        let [street, city, state, zipCode] = address.split(',');
        [street, city, state, zipCode] = [street.trim(), city.trim(), state.trim(), zipCode.trim()];
        return [street, city, state, zipCode];
    }

    // conditionally render submit bar
    submitBar() {
        if (this.state.title.length) {
            return <SubmitBar onClick={this.handleSubmit("formSubmit")} />
        }
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
            <option key={`category-${idx}`}>{category}</option>
        ));

        // generate TagButton components for TagButtons component
        let tags = this.state.tags.map((tag, idx) => <TagButton key={`tag-${idx}`} onClick={this.handleChange("deleteTag", `${tag}`)} tag={tag} />)

        // create option tags with all possible times
        let times = TIMES.map((time, idx) => (
            <React.Fragment key={`fragment-${idx}`}>
                <option key={`option-${idx}-0`}>{`${time}:00 AM`}</option>
                <option key={`option-${idx}-1`}>{`${time}:30 AM`}</option>
            </React.Fragment>
        )).concat(TIMES.map((time, idx) => (
            <React.Fragment key={`fragment-2-${idx}`}>
                <option key={`option-${idx}-2`}>{`${time}:00 PM`}</option>
                <option key={`option-${idx}-3`}>{`${time}:30 PM`}</option>
            </React.Fragment>
        )));

        let onlineOrVenue = ['Venue', 'Online'].map((option, idx) => (
            <option key={`venue-${idx}`}>{option}</option>            
        ));

        return(
            <>
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
                    {/* <input id="address-search" placeholder="Search for Address" onChange={this.handleChange("address")}/> */}
                    <div className="address-inputs">
                        <input placeholder="Street" onChange={this.handleChange("text", "street")} />
                        <input placeholder="City" onChange={this.handleChange("text", "city")} />
                        <input placeholder="State" onChange={this.handleChange("text", "state")} />
                        <input placeholder="Zip Code" onChange={this.handleChange("text", "zipCode")} />
                    </div>
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
            </div>
            <div className="spacer" />
            {this.submitBar()}
            </>
        )
    }
}

export default withRouter(EventForm);