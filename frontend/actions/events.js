export const RECEIVE_EVENT = 'RECEIVE_EVENT';
import * as ApiEventsUtil from '../util/events';

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
});

export const fetchEvent = (id) => dispatch => {
    return ApiEventsUtil.fetchEvent(id).then(
        event => dispatch(receiveEvent(event))
    );
}

export const postEvent = (event) => dispatch => {
    return ApiEventsUtil.postEvent(event).then(
        event => dispatch(receiveEvent(event))
    );
}