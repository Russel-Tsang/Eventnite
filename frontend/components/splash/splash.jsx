import React, { Component } from 'react';
import { EventCards, EventCard } from '../helper_components/event_card/event_card';
import { toMonth } from '../../util/calculations';
import SearchBar from '../helper_components/search_bar/search_bar';
import FilterBar from '../splash/filter_bar';
import MessageBar from '../helper_components/message_bar';
import { toTime } from '../../util/calculations';
import { Link } from 'react-router-dom';
import SplashCarousel from './splash_carousel';
import NoEventsBanner from './no_events_banner';

class Splash extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [
                'Category', 'Auto',
                'Business & Professional',
                'Community & Culture',
                'Family & Education',
                'Film & Media', 'Food & Drink',
                'Health', 'Hobbies',
                'Home & Lifestyle',
                'Music', 'Performing and Visual Arts',
                'Science & Tech'
            ],
            searchTerm: '',
            searchDayFilter: '',
            messageBar: false,
            liked: false,
            priceFilter: 'Any price',
            dayFilter: 'Any day'
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleMessageBar = this.handleMessageBar.bind(this);
        // this.unfilter = this.unfilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
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
                ) {
                    if (this.state.dayFilter === "Any day") {
                        return event;
                    } else {
                        let { beginYear, beginMonth, beginDay } = event;
                        beginMonth -= 1;
                        let eventDate = new Date(beginYear, beginMonth, beginDay);
                        let today = new Date();
                        today.setHours(0, 0, 0, 0);
                        let tomorrow = new Date();
                        tomorrow.setDate(today.getDate() + 1);
                        tomorrow.setHours(0, 0, 0, 0);
                        let upcomingSaturday = new Date();
                        let upcomingSunday = new Date();
                        upcomingSaturday.setDate(today.getDate() + (6 - today.getDay()));
                        upcomingSunday.setDate(today.getDate() + (7 - today.getDay()));
                        upcomingSaturday.setHours(0, 0, 0, 0);
                        upcomingSunday.setHours(0, 0, 0, 0);
                        switch(this.state.dayFilter) {
                            case "Today": 
                                if (today.toString() === eventDate.toString()) return event;
                                break;
                            case "Tomorrow":
                                if (eventDate.toString() === tomorrow.toString()) {
                                    return event;
                                }
                                break;
                            case "This Weekend": 
                                if (eventDate.getDay() === 0 || eventDate.getDay() === 6) {
                                    if (eventDate.toString() === today.toString() || eventDate.toString() === tomorrow.toString()) {
                                        return event;
                                    }
                                } else {
                                    if (eventDate.toString() === upcomingSaturday.toString() || eventDate.toString() === upcomingSunday.toString()) {
                                        return event;
    
                                    }
                                }
                                break;
                        }
                    }
                }
            };
        });
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        let eventCards = filteredEvents.map((event, idx) => {
            let { beginYear, beginMonth, beginDay, title, beginTime, city, state, id, price, pictureUrl, venueName } = event;
            if (!beginMonth) beginMonth = '';
            if (!beginDay) beginDay = '';
            if (!beginTime) beginTime = '';
            // let randomDay = dates[Math.floor(Math.random() * dates.length)];
            let dayIdx = new Date(beginYear, beginMonth - 1, beginDay).getDay();
            let day = days[dayIdx];
            let liked = this.props.likes[id] ? true : false;
            return (
                <EventCard
                    key={idx}
                    cardImage={pictureUrl || window.photoBalloons}
                    month={toMonth(beginMonth)}
                    day={day}
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
            'Business & Professional',
            'Community & Culture',
            'Family & Education',
            'Film & Media',
            'Food & Drink',
            'Health',
            'Hobbies',
            'Home & Lifestyle',
            'Music',
            'Performing and Visual Arts',
            'Science & Tech'
        ];
    } 

    // handles filtering or unfiltering of events 
    handleSelectChange(type, action) {
        return (event) => {
            debugger
            switch (type) {
                case "category":
                    action === 'unfilter' ? this.setState({ categories: this.generateCategories() }) : this.setState({ categories: [event.target.value] });
                    break;
                case "price":
                    action === 'unfilter' ? this.setState({ priceFilter: "Any price" }) : this.setState({ priceFilter: event.target.value });
                    break;
                case "day":
                    action === 'unfilter' ? this.setState({ dayFilter: 'Any day' }) : this.setState({ dayFilter: event.target.value });
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

    handleSearchInputChange(type) {
        return () => {
            this.setState({ [type]: event.target.value });
        }
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') this.handleSearchClick();
    }

    handleSearchClick() {
        let keyword = this.state.searchTerm ? this.state.searchTerm : 'all';
        let time = this.state.searchDayFilter ? this.state.searchDayFilter : 'any_date';
        this.props.history.push(`/all_events/${keyword}/${time}`);
    }

    handleMessageBar() {
        this.setState({ messageBar: false });
    }

    render() {
        // if this.state.messageBar is true, add "message-bar-show" class to show the bar
        let messageBarShow = this.state.messageBar ? 'message-bar-show' : '';
        let categoryButtonText, priceButtonText, dayButtonText;
        let eventsContent = this.renderEventCards();
        // if a category was selected, then this.state.categories will be an array with length of 1
        if (this.state.categories.length === 1) {
            categoryButtonText = this.state.categories;
        }

        if (eventsContent.length === 0) {
            eventsContent = 
                <NoEventsBanner
                    category={this.state.categories.length === 1 ? this.state.categories[0] : ''}
                    day={this.state.dayFilter !== 'Any day' ? this.state.dayFilter : ''}
                />;
        } 

        if (this.state.priceFilter !== "Any price") {
            priceButtonText = this.state.priceFilter;
        }

        if (this.state.dayFilter !== "Any day") {
            dayButtonText = this.state.dayFilter;
        }

        return (
            <div id="body">
                <MessageBar messageBarShow={messageBarShow} onCloseClick={this.handleMessageBar} liked={this.state.liked}/>
                <SplashCarousel /> 
                <div className="splash-grey-background"></div>  
                <div className="splash-content">  
                    <SearchBar 
                        onSearchInputChange={this.handleSearchInputChange}
                        onSearchClick={this.handleSearchClick}
                        onKeyPress={this.handleKeyPress}
                    />
                    <FilterBar 
                        categories={this.generateCategories()} 
                        categoryButtonText={categoryButtonText}
                        priceButtonText={priceButtonText}
                        dayButtonText={dayButtonText}
                        onCategoryChange={this.handleSelectChange("category", "filter")}
                        onPriceChange={this.handleSelectChange("price", "filter")}
                        onDayChange={this.handleSelectChange("day", "filter")}
                        onCategoryButtonClose={this.handleSelectChange("category", "unfilter")}
                        onPriceButtonClose={this.handleSelectChange("price", "unfilter")}
                        onDayButtonClose={this.handleSelectChange("day", "unfilter")}
                    />
                    <EventCards>
                        {eventsContent}
                    </EventCards>
                </div>
                <div className="more-events-div">
                    <Link className="more-events-link" to="/all_events/all/any_date">See more events</Link>
                </div>
                <div className="spacer"></div>
            </div>
        )
    }
}

export default Splash;