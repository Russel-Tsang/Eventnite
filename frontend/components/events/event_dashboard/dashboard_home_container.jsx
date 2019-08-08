import React from 'react';
import { connect } from 'react-redux';
import { fetchCreatedEvents, deleteEvent } from '../../../actions/events';
import DashboardHome from './dashboard_home';

const mapStateToProps = state => ({
    currentUser: state.session.id,
    events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
    fetchCreatedEvents: (userId) => dispatch(fetchCreatedEvents(userId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHome);