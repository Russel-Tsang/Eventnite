import React, { Component } from 'react';
import IndexRow from '../event_index/index_row';
import { toMonth, toTime } from '../../../util/calculations';

class EventFavorites extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    } 

    componentDidMount() {
        this.props.fetchLikedEvents(this.props.currentUser);
    }

    handleLikeClick(eventId) {
        return () => {
            if (this.props.likes[eventId]) {
                this.props.deleteLike(eventId, this.props.likes[eventId].likeId, "favorites").then(() => {
                    this.props.fetchLikedEvents(this.props.currentUser);
                })
            } else {
                this.props.postLike(eventId, "index");
            }
        }
    }

    handleEventClick(id) {
        return () => {
            this.props.history.push(`/events/${id}`);
        };
    }

    render() { 
        let indexRows = this.props.likedEvents.map((event, idx) => {
            let { title, beginMonth, beginDay, beginTime, venueName, city, state, price, pictureUrl, id } = event;
            let liked = this.props.likes[id] ? true : false;
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
            <div>
                {indexRows}
            </div>
        );
    }
}
 
export default EventFavorites;