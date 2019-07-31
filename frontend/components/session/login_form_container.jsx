import { login } from '../../actions/session';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const msp = state => ({
    errors: state.errors.sessionErrors,
    formType: 'Log In'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);