import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { postUser } from './util/session';
import configureStore from './store/store';
import { signup, logout, login } from './actions/session';

document.addEventListener('DOMContentLoaded', () => {
    window.postUser = postUser;
    window.signup = signup;
    window.logout = logout;
    window.login = login;
    window.dispatch = configureStore().dispatch;
    window.getState = configureStore().getState;
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});