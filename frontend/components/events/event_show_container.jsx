import React from 'react';
import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/events';

const msp = state => ({
    event: state.entities.event
})

const mdp = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEvent(id))
})

export default connect(msp, mdp)(EventShow);