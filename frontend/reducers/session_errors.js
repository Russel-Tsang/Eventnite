import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session';

export const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
};