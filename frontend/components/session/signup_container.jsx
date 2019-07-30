// signup_container corresponds with session_form

import { signup } from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => ({
    errors: state.errors.sessionErrors,
    formType: 'signup'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);