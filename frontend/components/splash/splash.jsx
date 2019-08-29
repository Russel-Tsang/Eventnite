import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';
import { toMonth } from '../../util/calculations';
import SearchBar from '../helper_components/search_bar/search_bar';
import FilterBar from '../splash/filter_bar';
import MessageBar from '../helper_components/message_bar';
import { toTime } from '../../util/calculations';
import { Link } from 'react-router-dom';

class Splash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [
                'Category',
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
            searchterm: '',
            messageBar: false,
            liked: false,
            priceFilter: 'Any price'
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMessageBar = this.handleMessageBar.bind(this);
        this.unfilter = this.unfilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    componentDidUpdate() {
    }

    renderEventCards() {
        let filteredEvents = this.props.events.filter(event => {
            if (this.state.categories.includes(event.category)) {
                if (
                    this.state.priceFilter === "Paid" && event.price > 0 
                    || 
                    this.state.priceFilter === "Free" && event.price === 0
                    ||
                    this.state.priceFilter === "Any price"
                ) return event;
            };
        });
        let dates = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        let eventCards = filteredEvents.map((event, idx) => {
            let { beginMonth, beginDay, title, beginTime, city, state, id, price, pictureUrl, venueName } = event;
            if (!beginMonth) beginMonth = '';
            if (!beginDay) beginDay = '';
            if (!beginTime) beginTime = '';
            let cardImage = pictureUrl || window.photoBalloons
            let randomDay = dates[Math.floor(Math.random() * dates.length)];
            let liked = this.props.likes[id] ? true : false;
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
                    onLikeClick={this.handleLikeClick(id)}
                    liked={liked}
                />
            );
        });
        return eventCards.slice(0, 9);
    }

    generateCategories() {
        return [
            'Any category',
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

    handleSelectChange(type) {
        return (event) => {
            switch (type) {
                case "category":
                    if (event.target.value === "Category") return;
                    event.target.value === "All" ? this.setState({ categories: this.generateCategories() }) : this.setState({ categories: [event.target.value] });
                    break;
                case "price":
                    this.setState({ priceFilter: event.target.value });
            }
        }
    }

    unfilter(type) {
        return () => {
            switch(type) {
                case "category": 
                    this.setState({ categories: this.generateCategories() });
                    break;
                case "price":
                    this.setState({ priceFilter: "Any price" });
                    break;
            }
        }
    }

    handleLikeClick(eventId) {
        return () => {
            if (!this.props.currentUser) {
                this.props.history.push('/signin');
                return;
            }
            if (this.props.likes[eventId]) {
                this.setState({messageBar: true, liked: false });
                this.props.deleteLike(eventId, this.props.likes[eventId].likeId, "index");
            } else {
                this.setState({ messageBar: true, liked: true });
                this.props.postLike(eventId, "index");
            }
            setTimeout(() => {
                this.setState({ messageBar: false });
            }, 4000);
        }
    }

    handleMessageBar() {
        this.setState({ messageBar: false });
    }

    render() {
        // if this.state.messageBar is true, add "message-bar-show" class to show the bar
        let messageBarShow = this.state.messageBar ? 'message-bar-show' : '';
        let categoryButtonText, priceButtonText;
        // if a category was selected, then this.state.categories will be an array with length of 1
        if (this.state.categories.length > 1) {
            console.log('do something');
        } else {
            categoryButtonText = this.state.categories;
        }

        if (this.state.priceFilter !== "Any price") {
            priceButtonText = this.state.priceFilter;
        }

        return (
            <div id="body">
                <MessageBar messageBarShow={messageBarShow} onCloseClick={this.handleMessageBar} liked={this.state.liked}/>
                <img className="splash-banner" src={window.splashBanner2} /> 
                <div className="splash-grey-background"></div>  
                <div className="splash-content">  
                    <SearchBar />
                    <FilterBar 
                        categories={this.generateCategories()} 
                        onCategoryChange={this.handleSelectChange("category")}
                        onPriceChange={this.handleSelectChange("price")}
                        categoryButtonText={categoryButtonText}
                        priceButtonText={priceButtonText}
                        onCategoryButtonClose={this.unfilter("category")}
                        onPriceButtonClose={this.unfilter("price")}
                    />
                    <EventCards>
                        {this.renderEventCards()}
                    </EventCards>
                </div>
                <div className="more-events-div">
                    <Link className="more-events-link" to="/all_events">See more events</Link>
                </div>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Splash;