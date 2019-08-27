import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './event_dashboard';
import { fetchEvent } from '../../../actions/events';

const msp = (state, ownProps) => {
    let pathName = ownProps.location.pathname.split("/");
    let eventId = Number(pathName[pathName.length - 1]);
    return {
        event: state.entities.events[eventId] || { title: '', description: '', tags: '', organizer: '', onlineEvent: '', street: '', state: '', city: '', zipCode: '', beginDay: '', beginMonth: '', beginYear: '', endDay: '', endMonth: '', endYear: '', beginTime: '', endTime: '' },
        currentUser: state.session.id
    }
}

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id)),
})

export default connect(msp, mdp)(Dashboard);