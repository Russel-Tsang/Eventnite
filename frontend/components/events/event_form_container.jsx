import { login, signup, verifyUser } from '../../actions/session';
import { connect } from 'react-redux';
import EventForm from './event_form';

const msp = state => ({
    formType: "Get Started",
    errors: state.errors.sessionErrors
});

const mdp = (dispatch) => ({
    
});

export default connect(msp, mdp)(EventForm);