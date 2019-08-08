export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
import * as ApiEventsUtil from '../util/events';

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
});

const receiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events
    }
    
};

export const fetchEvent = (id) => dispatch => {
    return ApiEventsUtil.fetchEvent(id).then(
        event => dispatch(receiveEvent(event))
    );
}

export const fetchCreatedEvents = (userId) => dispatch => {
    return ApiEventsUtil.fetchedCreatedEvents(userId).then(
        events => dispatch(receiveEvents(events))
    );
}

export const postEvent = (event) => dispatch => {
    return ApiEventsUtil.postEvent(event).then(
        event => dispatch(receiveEvent(event))
    );
}

export const fetchEvents = () => dispatch => {
    return ApiEventsUtil.fetchEvents().then(
        events => dispatch(receiveEvents(events))
    );
}

export const updateEvent = (event) => dispatch => {
    return ApiEventsUtil.updateEvent(event).then(
        event => dispatch(receiveEvent(event))
    )
}

export const deleteEvent = (id) => dispatch => {
    return ApiEventsUtil.deleteEvent(id).then(
        events => {
            return dispatch(receiveEvents(events))
        }
    )
}

export const postRegistration = (eventId) => dispatch => {
    return ApiEventsUtil.postRegistration(eventId).then(
        event => dispatch(receiveEvent(event))
    );
}

export const deleteRegistration = (eventId, registrationId) => dispatch => {
    return ApiEventsUtil.deleteRegistration(eventId, registrationId).then(
        event => dispatch(receiveEvent(event))
    );
}

export const updatePictureAndDescription = (pictureAndDescription, eventId) => dispatch => {
    return ApiEventsUtil.updatePictureAndDescription(pictureAndDescription, eventId).then(
        event => dispatch(receiveEvent(event))
    );
}
