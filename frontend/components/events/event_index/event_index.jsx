import React, { Component } from 'react';
import IndexSearch from './index_search';
import IndexFilter from './index_filter';
import IndexRow from './index_row';
import FiltersAside from './index_filters_aside';
import { toTime, toMonth } from '../../../util/calculations';
import Map from '../../helper_components/google_map';
import MessageBar from '../../helper_components/message_bar';

class EventIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            searchValueHolder: '',
            dayFilter: '',
            showFiltersAside: false,
            categoryFilter: '',
            eventTypeFilter: '',
            priceFilter: '',
            messageBar: false,
            hoveredLocation: '',
            liked: false,
            
            filterSelections: {
                categoryFilter: '',
                eventTypeFilter: '',
                priceFilter: '',
            }
        }

        this.handleFilterChange = this.handleFilterChange.bind(this); 
        this.handleDayFilterChange = this.handleDayFilterChange.bind(this);
        this.handleApplyClick = this.handleApplyClick.bind(this);
        this.handleClearSelection = this.handleClearSelection.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleIndexRowHover = this.handleIndexRowHover.bind(this);
        this.handleMessageBarClose = this.handleMessageBarClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        let searchValue = this.props.match.params.searchValue;
        let searchValueHolder = searchValue === "all" ? '' : searchValue;
        let dayFilter = this.props.match.params.dayFilter;
        if (searchValue && this.state.searchValue !== searchValue) {
            this.setState({ searchValue, searchValueHolder });
        } 
        if (dayFilter && this.state.dayFilter !== dayFilter) {
            this.setState({ dayFilter: dayFilter });
        }
    }

    handleLikeClick(eventId) {
        return () => {
            if (!this.props.currentUser) {
                this.props.history.push('/signin');
                return;
            }
            if (this.props.likes[eventId]) {
                this.setState({ messageBar: true, liked: false });
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

    handleFiltersClick(bool) {
        return () => {
            this.setState({ showFiltersAside: bool });
        };
    }

    handleFilterChange(filter) {
        return (event) => {
            document.querySelector('.index-search-suggestions').classList.add('display-none');
            if (event.currentTarget.className === "search-suggestion-row") {
                switch(event.currentTarget.innerText) {
                    case "Business":
                        this.setState({ categoryFilter: "Business & Professional" });
                        break;
                    default:
                        this.setState({ categoryFilter: event.currentTarget.innerText});
                        break;
                }
            } else {
                let value = event.target.value.split(' ')[0] === "Any" ? '' : event.target.value;
                let filterSelections = Object.assign(this.state.filterSelections);
                filterSelections[filter] = value;
                this.setState({ filterSelections });
            }
        };
    }

    handleClearSelection(filterType) {
        return () => {
            if (filterType === 'dayFilter') {
                this.props.history.push(`/all_events/${this.state.searchValue}/any_date`);
            } else {
                this.setState({ [filterType]: '' });
            }
        }
    }

    handleDayFilterChange(event) {
        let searchValue = this.state.searchValue ? this.state.searchValue : 'all';
        let dayFilter = event.target.value === "Any Date" ? 'any_date' : event.target.value;
        this.props.history.push(`/all_events/${searchValue}/${dayFilter}`);
    }

    handleApplyClick() {
        let categoryFilter = this.state.filterSelections.categoryFilter;
        let eventTypeFilter = this.state.filterSelections.eventTypeFilter;
        let priceFilter = this.state.filterSelections.priceFilter;
        this.setState({ categoryFilter, eventTypeFilter, priceFilter, showFiltersAside: false });
    }

    handleEventClick(id) {
        return () => {
            this.props.history.push(`/events/${id}`);
        };
    }

    handleSearchChange(event) {
        this.setState({ searchValueHolder: event.target.value });
    }

    handleSearchKeyPress() {
        if (event.key === 'Enter') {
            this.handleSearchClick();
            document.querySelector('.index-search-suggestions').classList.add('display-none');
        }
    }

    handleSearchClick() {
        if (this.state.searchValueHolder) {
            this.props.history.push(`/all_events/${this.state.searchValueHolder}/${this.state.dayFilter.toLowerCase()}`);
        } else {
            this.props.history.push(`/all_events/all/${this.state.dayFilter.toLowerCase()}`);
        }
    }

    handleIndexRowHover(venueName) {
        return () => {
            this.setState({ hoveredLocation: venueName });
        }
    }

    handleMessageBarClose() {
        this.setState({ messageBar: false });
    }

    render() { 
        let { categoryFilter, eventTypeFilter, priceFilter, searchValue } = this.state; 
        let events = this.props.events.filter(event => {
            if (event.title.toLowerCase().includes(searchValue.toLowerCase()) || this.state.searchValue === 'all') {
                if (event.category === categoryFilter || !categoryFilter) {
                    if (event.eventType === eventTypeFilter || !eventTypeFilter) {
                        if ((event.price > 0 && priceFilter === "Paid") || (event.price === 0 && priceFilter === "Free") || !priceFilter) {
                            // return event;
                            if (this.state.dayFilter === 'any_date') {
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
                                switch (this.state.dayFilter) {
                                    case "Today":
                                        if (today.toString() === eventDate.toString()) return event;
                                        break;
                                    case "Tomorrow":
                                        if (eventDate.toString() === tomorrow.toString()) {
                                            console.log('here');
                                            return event;
                                        }
                                        break;
                                    case "This weekend":
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
                    }
                }
            }
        });

        let indexRows = events.map((event, idx) => {
            let { title, beginYear, beginMonth, beginDay, beginTime, venueName, city, state, price, pictureUrl, id, onlineEvent } = event;
            pictureUrl = pictureUrl || window.splashBanner;
            let liked = this.props.likes[id] ? true : false;
            let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
            let dayIdx = new Date(beginYear, beginMonth - 1, beginDay).getDay();
            let day = days[dayIdx];
            return (
                <IndexRow
                    pictureUrl = {pictureUrl}
                    key={idx}
                    day={day}
                    title={title}
                    beginMonth={toMonth(beginMonth)}
                    beginDay={beginDay}
                    beginTime={toTime(beginTime)}
                    venueName={venueName}
                    city={city}
                    state={state}
                    price={price}
                    handleMouseEnter={this.handleIndexRowHover(venueName)}
                    onlineEvent={onlineEvent}
                    onLikeClick={this.handleLikeClick(id)}
                    onEventClick={this.handleEventClick(id)}
                    liked={liked}
                />
            );
        });

        let filterButtons = [
            ['categoryFilter', categoryFilter], 
            ['eventTypeFilter', eventTypeFilter], 
            ['priceFilter', priceFilter]
        ].filter(buttonDetails => buttonDetails[1] !== '');

        let messageBarShow = this.state.messageBar ? 'message-bar-show' : '';
        let dayFilterButtonText;
        if (this.state.dayFilter && this.state.dayFilter !== 'any_date') dayFilterButtonText = this.state.dayFilter;
        return ( 
            <div className="event-index">
                <div className="event-index-main">
                    <MessageBar messageBarShow={messageBarShow} onCloseClick={this.handleMessageBarClose} liked={this.state.liked} />
                    <IndexSearch 
                        indexRows={indexRows}
                        onCategoryClick={this.handleFilterChange('categoryFilter')}
                        onSearchChange={this.handleSearchChange}
                        searchValue={this.state.searchValueHolder}
                        onKeyPress={this.handleSearchKeyPress}
                        onSearchClick={this.handleSearchClick}
                    />
                    <IndexFilter 
                        onShowFiltersClick={this.handleFiltersClick(true)}
                        filterButtons={filterButtons}
                        onClearSelection={this.handleClearSelection}
                        onDayFilterChange={this.handleDayFilterChange}
                        dayFilterButtonText={dayFilterButtonText}
                        onClearDayFilter={this.handleClearSelection}
                    />
                    <div className="index-rows-container">
                        {indexRows}
                    </div>
                    <FiltersAside
                        showAside={this.state.showFiltersAside}
                        onCloseClick={this.handleFiltersClick(false)}
                        onCategoryChange={this.handleFilterChange('categoryFilter')}
                        onTypeChange={this.handleFilterChange('eventTypeFilter')}
                        onPriceChange={this.handleFilterChange('priceFilter')}
                        onApplyClick={this.handleApplyClick}
                    />
                    </div>
                <div className="event-index-map">
                    <Map events={events} hoveredLocation={this.state.hoveredLocation}/>
                </div>
            </div> 
        );
    }
}
 
export default EventIndex;