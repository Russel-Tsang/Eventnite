import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {postUser} from './util/session';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    window.postUser = postUser;
    window.dispatch = configureStore().dispatch;
    window.getState = configureStore().getState;
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
});