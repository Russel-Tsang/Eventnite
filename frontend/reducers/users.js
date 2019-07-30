import { RECEIVE_CURRENT_USER } from '../actions/session';
import { merge } from 'lodash';

// users reducer
export const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newUser;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newUser = { [action.user.id]: action.user };
            return merge({}, oldState, newUser);
        default:
            return oldState;
    }
}