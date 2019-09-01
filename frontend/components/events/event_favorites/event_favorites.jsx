import React, { Component } from 'react';
import IndexRow from '../event_index/index_row';
import { toMonth, toTime } from '../../../util/calculations';
import { merge } from 'lodash';

class EventFavorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventsToDelete: {},
            likedEvents: {}
        }

        this.handleLikeClick = this.handleLikeClick.bind(this);
    } 

    componentDidMount() {
        window.onbeforeunload = () => this.handleDeletes();
        this.props.fetchLikedEvents(this.props.currentUser)
            .then(action => this.setState({ likedEvents: action.likes }));

        if (this.props.location.pathname !== '/favorites') this.props.history.push('/favorites');
    }

    componentWillUnmount() {
        window.onbeforeunload = null;
        if (Object.values(this.state.eventsToDelete).length) {
            let eventIds = Object.keys(this.state.eventsToDelete);
            let likeIds = Object.values(this.state.eventsToDelete);
            for (let i = 0; i < eventIds.length; i++) {
                this.props.deleteLike(eventIds[i], likeIds[i], "favorites");
            }
        }
    }

    componentDidUpdate() {
        debugger
        if (Object.values(this.state.eventsToDelete).length && this.props.location.pathname !== '/favorites/dl') {
            let eventIds = Object.keys(this.state.eventsToDelete);
            let likeIds = Object.values(this.state.eventsToDelete);
            for (let i = 0; i < eventIds.length; i++) {
                this.props.deleteLike(eventIds[i], likeIds[i], "favorites");
            }
        }
    }

    // stores event ids and like ids into state so likes can be deleted from DB upon page leave / refresh
    handleLikeClick(eventId) {
        return () => {
            debugger
            let eventsToDelete = merge({}, this.state.eventsToDelete);
            let likedEvents = merge({}, this.state.likedEvents);
            if (likedEvents[eventId]) {
                debugger
                eventsToDelete[eventId] = this.props.likes[eventId].likeId;
                this.props.history.push('/favorites/dl');
                delete likedEvents[eventId];
            } else {
                debugger
                likedEvents[eventId] = this.props.likes[eventId];
                delete eventsToDelete[eventId];
            }
            
            this.setState({ eventsToDelete });
            this.setState({ likedEvents });
        }
    }

    handleEventClick(id) {
        return () => {
            this.props.history.push(`/events/${id}`);
        };
    }

    handleDeletes() {
        if (Object.values(this.state.eventsToDelete).length) {
            let eventIds = Object.keys(this.state.eventsToDelete);
            let likeIds = Object.values(this.state.eventsToDelete);
            for (let i = 0; i < eventIds.length; i++) {
                this.props.deleteLike(eventIds[i], likeIds[i], "favorites");
            }
        }
    }

    render() { 
        let indexRows = this.props.likedEvents.map((event, idx) => {
            let { title, beginMonth, beginDay, beginTime, venueName, city, state, price, pictureUrl, id } = event;
            let liked = this.state.likedEvents[id] ? true : false;
            return (
                <IndexRow
                    pictureUrl={pictureUrl}
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
            <div className="favorites-container">
                <h1 className="favorites-header">Likes</h1>
                {indexRows}
            </div>
        );
    }
}
 
export default EventFavorites;