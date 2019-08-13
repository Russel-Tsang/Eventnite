import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';
import { toMonth } from '../../util/calculations';
import SearchBar from '../helper_components/search_bar/search_bar';
import FilterBar from '../splash/filter_bar';
import { toTime } from '../../util/calculations';

class Splash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [
                'Category',
                'All',
                'Auto',
                'Boat & Air',
                'Business & Professional',
                'Charities & Causes',
                'Community & Culture',
                'Family & Education',
                'Fashion',
                'Film & Media',
                'Food & Drink',
                'Government',
                'Health',
                'Hobbies',
                'Holiday',
                'Home & Lifestyle',
                'Music',
                'Performing and Visual Arts',
                'School Activities',
                'Science & Tech'
            ],
            searchterm: ''
        }

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    renderEventCards() {
        let filteredEvents = this.props.events.filter(event => this.state.categories.includes(event.category));
        let dates = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        let eventCards = filteredEvents.map((event, idx) => {
            let { beginMonth, beginDay, title, beginTime, city, state, id, price, pictureUrl, venueName } = event;
            if (!beginMonth) beginMonth = '';
            if (!beginDay) beginDay = '';
            if (!beginTime) beginTime = '';
            let cardImage = pictureUrl || window.photoBalloons
            let randomDay = dates[Math.floor(Math.random() * dates.length)];
            return (
                <EventCard
                    key={idx}
                    cardImage={cardImage}
                    month={toMonth(beginMonth)}
                    day={randomDay}
                    date={beginDay}
                    title={title}
                    time={toTime(beginTime)}
                    venueName={venueName}
                    city={city}
                    state={state}
                    price={Math.floor(price)}
                    eventId={id}
                />
            );
        });
        return eventCards
    }

    generateCategories() {
        return [
            'Category',
            'All',
            'Auto',
            'Boat & Air',
            'Business & Professional',
            'Charities & Causes',
            'Community & Culture',
            'Family & Education',
            'Fashion',
            'Film & Media',
            'Food & Drink',
            'Government',
            'Health',
            'Hobbies',
            'Holiday',
            'Home & Lifestyle',
            'Music',
            'Performing and Visual Arts',
            'School Activities',
            'Science & Tech'
        ];
    } 

    handleCategoryChange(type) {
        return (event) => {
            switch (type) {
                case "category":
                    if (event.target.value === "Category") return;
                    event.target.value === "All" ? this.setState({ categories: this.generateCategories() }) : this.setState({ categories: [event.target.value] });
                    break;
            }
        }
        
    }


    // *adjust to camelCase*
    render() {
        return (
            <div id="body">
                <img className="splash-banner" src={window.splashBanner2} /> 
                <div className="splash-grey-background"></div>  
                <div className="splash-content">  
                    <SearchBar />
                    <FilterBar categories={this.generateCategories()} onCategoryChange={this.handleCategoryChange("category")}/>
                    <EventCards>
                        {this.renderEventCards()}
                    </EventCards>
                </div>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Splash;