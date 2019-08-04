import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { postUser } from './util/session';
import { postEvent } from './util/events';
import configureStore from './store/store';
import { signup, logout, login, verifyUser } from './actions/session';
import { fetchEvent, fetchEvents } from './actions/events';
// import { fetchEvent } from './util/events';

document.addEventListener('DOMContentLoaded', () => {
    // testing
    window.postUser = postUser;
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    window.verifyUser = verifyUser;
    window.fetchEvent = fetchEvent;
    window.fetchEvents = fetchEvents;
    window.postEvent = postEvent;
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.dispatch = configureStore().dispatch;
    window.getState = configureStore().getState;
    // let store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});