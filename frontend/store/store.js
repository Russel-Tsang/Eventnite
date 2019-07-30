import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

export default (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);
