import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout, login } from '../../actions/session';

const mapStateToProps = state => ({
    currentUser: state.session.id,
    currentUserObj: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);