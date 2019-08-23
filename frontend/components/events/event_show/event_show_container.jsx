import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, postRegistration, deleteRegistration, postFollow, deleteFollow } from '../../../actions/events';

const msp = (state, ownProps) => {
    debugger
    // receive event
    return {
        event: state.entities.events[ownProps.match.params.eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' },
        tags: Object.values(state.entities.tags),
        currentUser: state.session.id
    }
    
    // event: state.entities.events
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    postRegistration: (eventId) => dispatch(postRegistration(eventId)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId)),
    postFollow: (eventId) => dispatch(postFollow(eventId)),
    deleteFollow: (eventId, followId) => dispatch(deleteFollow(eventId, followId))
})

export default connect(msp, mdp)(EventShow);