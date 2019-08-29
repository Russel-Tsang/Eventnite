import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../actions/events';

export const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.likes
        case RECEIVE_EVENT:
            return action.likes
        default:
            return oldState;
    }
} 
