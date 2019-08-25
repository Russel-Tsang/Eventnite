import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card';
import { toMonth } from '../../util/calculations';
import SearchBar from '../helper_components/search_bar/search_bar';
import FilterBar from '../splash/filter_bar';
import MessageBar from '../helper_components/message_bar';
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
            searchterm: '',
            messageBar: false,
            liked: false
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMessageBar = this.handleMessageBar.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    componentDidUpdate() {
        debugger
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

    handleSelectChange(type) {
        return (event) => {
            switch (type) {
                case "category":
                    if (event.target.value === "Category") return;
                    event.target.value === "All" ? this.setState({ categories: this.generateCategories() }) : this.setState({ categories: [event.target.value] });
                    break;
            }
        }
    }

    handleLikeClick(eventId) {
        return () => {
            debugger
            if (this.props.likes[eventId]) {
                this.setState({messageBar: true, liked: false });
                this.props.deleteLike(eventId, this.props.likes[eventId].likeId);
            } else {
                this.setState({ messageBar: true, liked: true });
                this.props.postLike(eventId);
            }
            setTimeout(() => {
                this.setState({ messageBar: false });
            }, 4000);
        }
    }

    handleMessageBar() {
        this.setState({ messageBar: false });
    }

    // *adjust to camelCase*
    render() {
        // if this.state.messageBar is true, add "message-bar-show" class to show the bar
        let messageBarShow = this.state.messageBar ? 'message-bar-show' : '';

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
                    />
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