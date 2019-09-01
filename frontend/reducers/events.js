import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/events';

export const eventsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newEvent;
    switch (action.type) {
        case RECEIVE_EVENT:
            newEvent = { [action.event.id]: action.event } 
            return newEvent;
        case RECEIVE_EVENTS:
            if (action.events) {
                return action.events;    
            } else {
                return {};
            }
        default:
            return oldState;
    }
} 
