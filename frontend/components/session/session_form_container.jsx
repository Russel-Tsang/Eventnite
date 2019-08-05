import { login, signup, verifyUser } from '../../actions/session';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const msp = state => ({
    formType: "Get Started",
    errors: state.errors.sessionErrors.responseJSON || ""
});

const mdp = (dispatch) => ({
    verifyUser: (email) => dispatch(verifyUser(email)),
    logIn: (user) => dispatch(login(user)),
    signUp: (email) => dispatch(signup(email)),
});

export default connect(msp, mdp)(SessionForm);