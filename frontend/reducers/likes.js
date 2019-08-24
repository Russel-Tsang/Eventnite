import { RECEIVE_EVENTS } from '../actions/events';

export const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.likes
        default:
            return oldState;
    }
} 
