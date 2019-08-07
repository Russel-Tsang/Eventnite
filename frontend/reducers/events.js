import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/events';

export const eventsReducer = (oldState = {}, action) => {
    debugger
    Object.freeze(oldState);
    let newEvent;
    switch (action.type) {
        case RECEIVE_EVENT:
            newEvent = { [action.event.id]: action.event } 
            return newEvent;
        case RECEIVE_EVENTS:
            return action.events
        default:
            return oldState;
    }
} 
