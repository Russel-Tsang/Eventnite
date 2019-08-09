import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './event_dashboard';
import { fetchEvent } from '../../../actions/events';

const msp = (state, ownProps) => {
    // receive event
    return {
        event: state.entities.events[ownProps.match.params.eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' },
        currentUser: state.session.id
    }
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
})

export default connect(msp, mdp)(Dashboard);