import React, { Component } from 'react';
import IndexSearch from './index_search';
import IndexFilter from './index_filter';
import IndexRow from './index_row';
import FiltersAside from './index_filters_aside';
import { toTime, toMonth } from '../../../util/calculations';

class EventIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFiltersAside: false,
            categoryFilter: '',
            eventTypeFilter: '',
            priceFilter: '',
            
            filterSelections: {
                categoryFilter: '',
                eventTypeFilter: '',
                priceFilter: '',
            }
        }

        this.handleFilterChange = this.handleFilterChange.bind(this); 
        this.handleApplyClick = this.handleApplyClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    handleLikeClick(eventId) {
        return () => {
            if (this.props.likes[eventId]) {
                this.props.deleteLike(eventId, this.props.likes[eventId].likeId);
            } else {
                this.props.postLike(eventId);
            }
        }
    }

    handleFiltersClick(bool) {
        return () => {
            this.setState({ showFiltersAside: bool });
        };
    }

    handleFilterChange(filter) {
        return (event) => {
            let value = event.target.value.split(' ')[0] === "Any" ? '' : event.target.value;
            let filterSelections = Object.assign(this.state.filterSelections);
            filterSelections[filter] = value;
            this.setState({ filterSelections });
        };
    }

    handleApplyClick() {
        let categoryFilter = this.state.filterSelections.categoryFilter;
        let eventTypeFilter = this.state.filterSelections.eventTypeFilter;
        let priceFilter = this.state.filterSelections.priceFilter;
        this.setState({ categoryFilter, eventTypeFilter, priceFilter });
    }

    handleEventClick(id) {
        return () => {
            this.props.history.push(`/events/${id}`);
        };
    }

    render() { 
        let { categoryFilter, eventTypeFilter, priceFilter } = this.state; 
        // if (categoryFilter || eventTypeFilter || priceFilter)
        let events = this.props.events.filter(event => {
            if (event.category === categoryFilter || !categoryFilter) {
                if (event.eventType === eventTypeFilter || !eventTypeFilter) {
                    if ((event.price > 0 && priceFilter === "Paid") || (event.price === 0 && priceFilter === "Free") || !priceFilter) {
                        return event;
                    }
                }
            }
        });
        let indexRows = events.map((event, idx) => {
            let { title, beginMonth, beginDay, beginTime, venueName, city, state, price, pictureUrl, id } = event;
            let liked = this.props.likes[id] ? true : false;
            return (
                <IndexRow
                    pictureUrl = {pictureUrl}
                    key={idx}
                    day={"Mon"}
                    title={title}
                    beginMonth={toMonth(beginMonth)}
                    beginDay={beginDay}
                    beginTime={toTime(beginTime)}
                    venueName={venueName}
                    city={city}
                    state={state}
                    price={price}
                    onLikeClick={this.handleLikeClick(id)}
                    onEventClick={this.handleEventClick(id)}
                    liked={liked}
                />
            );
        })

        return ( 
            <div className="event-index">
                <IndexSearch />
                <IndexFilter 
                    onFiltersClick={this.handleFiltersClick(true)}
                />
                <div className="index-rows-container">
                    {indexRows}
                </div>
                <div className="google-maps">
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
        );
    }
}
 
export default EventIndex;