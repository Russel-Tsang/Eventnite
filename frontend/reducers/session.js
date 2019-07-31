import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_EMAIL } from '../actions/session';

const _nullSession = {
    id: null
};

// session reducer
export const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id };
        case RECEIVE_EMAIL:
            return { email: action.email };
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};
