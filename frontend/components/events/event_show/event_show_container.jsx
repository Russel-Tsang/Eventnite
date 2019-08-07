import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent, postRegistration, deleteRegistration } from '../../../actions/events';

const msp = (state, ownProps) => {
    // receive event
    return {
        event: state.entities.events[ownProps.match.params.eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' }
    }
    
    // event: state.entities.events
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
    postRegistration: (id) => dispatch(postRegistration(id)),
    deleteRegistration: (eventId, registrationId) => dispatch(deleteRegistration(eventId, registrationId))
})

export default connect(msp, mdp)(EventShow);