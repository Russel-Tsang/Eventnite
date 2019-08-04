import { postEvent } from '../../../actions/events';
import { connect } from 'react-redux';
import EventForm from './event_form';

const msp = ({ errors, entities, session }) => ({
    errors: errors.sessionErrors,
    event: entities.event,
    currentUser: session.id
});

const mdp = (dispatch) => ({
    action: (event) => dispatch(postEvent(event))
});

export default connect(msp, mdp)(EventForm);