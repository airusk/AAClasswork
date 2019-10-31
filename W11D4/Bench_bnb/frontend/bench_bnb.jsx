import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
import { signup } from './actions/session_actions';
import { login } from './actions/session_actions';
import { logout } from './actions/session_actions';
document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    //
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});