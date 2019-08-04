import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../../actions/events';

const msp = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' }
    // event: state.entities.events
})

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id))
})

export default connect(msp, mdp)(EventShow);