import { RECEIVE_LIKES } from '../actions/events';

export const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes
        default:
            return oldState;
    }
} 
