import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { eventsReducer } from './events';  

export default combineReducers({
    users: usersReducer,
    events: eventsReducer
})