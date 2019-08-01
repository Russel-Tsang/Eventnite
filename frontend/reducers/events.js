import { RECEIVE_EVENT } from '../actions/events';
import { merge } from 'lodash';

export const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newEvent;
    switch (action.type) {
        case RECEIVE_EVENT:
            newEvent = { [action.event.id]: action.event } 
            return merge({}, oldState, newEvent);
        default:
            return oldState;
    }
} 
