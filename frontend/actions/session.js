import * as ApiSessionsUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 

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

// thunk action creators
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
