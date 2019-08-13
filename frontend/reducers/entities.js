import { combineReducers } from 'redux';
import { usersReducer } from './users';
import { eventsReducer } from './events';  
import { tagsReducer } from './tags';  

export default combineReducers({
    users: usersReducer,
    events: eventsReducer,
    tags: tagsReducer
})