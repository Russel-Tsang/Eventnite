export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
import * as ApiEventsUtil from '../util/events';

const receiveEvent = (eventData) => {
    return ({
        type: RECEIVE_EVENT,
        event: eventData.event,
        tags: eventData.tags,
        likes: eventData.likes
    });
    
};

const receiveEvents = (eventData) => {
    return {
        type: RECEIVE_EVENTS,
        events: eventData.events,
        likes: eventData.likes
    }
};

export const fetchEvent = (id) => dispatch => {
    return ApiEventsUtil.fetchEvent(id).then(
        event => dispatch(receiveEvent(event))
    );
}

export const fetchCreatedEvents = (userId) => dispatch => {
    return ApiEventsUtil.fetchCreatedEvents(userId).then(
        events => dispatch(receiveEvents(events))
    );
}

export const fetchLikedEvents = (userId) => dispatch => {
    return ApiEventsUtil.fetchLikedEvents(userId).then(
        events => dispatch(receiveEvents(events))
    );
}

export const postEvent = (event) => dispatch => {
    return ApiEventsUtil.postEvent(event).then(
        event => dispatch(receiveEvent(event))
    );
}

export const updatePictureAndDescription = (pictureAndDescription, eventId) => dispatch => {
    return ApiEventsUtil.updatePictureAndDescription(pictureAndDescription, eventId).then(
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

export const postFollow = (eventId) => dispatch => {
    return ApiEventsUtil.postFollow(eventId).then(
        event => dispatch(receiveEvent(event))
    );
}

export const deleteFollow = (eventId, followId) => dispatch => {
    return ApiEventsUtil.deleteFollow(eventId, followId).then(
        event => dispatch(receiveEvent(event))
    );
}

export const postLike = (eventId, requestPage) => dispatch => {
    return ApiEventsUtil.postLike(eventId, requestPage).then(
        eventData => {
            if (requestPage === "index") {
                dispatch(receiveEvents(eventData))
            } else if (requestPage === "show") {
                dispatch(receiveEvent(eventData))
            }
        }
    );
}

export const deleteLike = (eventId, likeId, requestPage) => dispatch => {
    return ApiEventsUtil.deleteLike(eventId, likeId, requestPage).then(
        eventData => {
            if (requestPage === "index") {
                dispatch(receiveEvents(eventData))
            } else if (requestPage === "show") {
                dispatch(receiveEvent(eventData))
            }
        }
    );
}
