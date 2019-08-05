import { postEvent, updateEvent, fetchEvent } from '../../../actions/events';
import { connect } from 'react-redux';
import EventForm from './event_form';

const msp = ({ errors, entities, session }) => ({
    errors: errors.sessionErrors,
    event: entities.events,
    currentUser: session.id
});

const mdp = (dispatch) => ({
    postEvent: (event) => dispatch(postEvent(event)),
    updateEvent: (event) => dispatch(updateEvent(event)),
    fetchEvent: (id) => dispatch(fetchEvent(id))
});

export default connect(msp, mdp)(EventForm);