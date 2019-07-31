import * as ApiSessionsUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 
export const RECEIVE_EMAIL = 'RECEIVE_EMAIL'; 

// action creators
const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

const receiveEmail = (email) => ({
    type: RECEIVE_EMAIL,
    email
})

// thunk action creators
export const verifyUser = email => dispatch => ApiSessionsUtil.verifyUser(email)
    .then(emailObj => dispatch(receiveEmail(emailObj.email)));

export const signup = formUser => dispatch => ApiSessionsUtil.postUser(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    );

export const login = formUser => dispatch => ApiSessionsUtil.postSession(formUser)
    .then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    );

export const logout = () => dispatch => ApiSessionsUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()));


