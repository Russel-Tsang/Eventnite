import { RECEIVE_EVENT } from '../actions/events';

export const tagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_EVENT:
            if (!action.tags) return {};
            return action.tags 
        default:
            return oldState;
    }
} 
