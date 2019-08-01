import { postEvent } from '../../actions/events';
import { connect } from 'react-redux';
import EventForm from './event_form';

const msp = state => ({
    errors: state.errors.sessionErrors
});

const mdp = (dispatch) => ({
    action: (event) => dispatch(postEvent(event))
});

export default connect(msp, mdp)(EventForm);