import { login } from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.sessionErrors
});

const mdp = (dispatch) => ({
    processForm: (email) => dispatch(login(email))
});

export default connect(msp, mdp)(SessionForm);