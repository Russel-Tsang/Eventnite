import React from 'react';

import { signup } from '../../actions/session';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const msp = state => ({
    errors: state.errors.sessionErrors,
    formType: 'Sign Up'
});

const mdp = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SignupForm);