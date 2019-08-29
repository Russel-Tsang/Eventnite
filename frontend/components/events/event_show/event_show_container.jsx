import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, postRegistration, deleteRegistration, postFollow, deleteFollow, postLike, deleteLike } from '../../../actions/events';

const msp = (state, ownProps) => {
    // receive event
    return {
        event: state.entities.events[ownProps.match.params.eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' },
        tags: Object.values(state.entities.tags),
        currentUser: state.session.id,
        likes: state.entities.likes
    }
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    postRegistration: (eventId) => dispatch(postRegistration(eventId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    postFollow: (eventId) => dispatch(postFollow(eventId)),
    deleteFollow: (eventId, followId) => dispatch(deleteFollow(eventId, followId)),
    postLike: (eventId, requestPage) => dispatch(postLike(eventId, requestPage)),
    deleteLike: (eventId, likeId, requestPage) => dispatch(deleteLike(eventId, likeId, requestPage))
})

export default connect(msp, mdp)(EventShow);