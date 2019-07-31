import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import SessionContainer from './session/session_form_container';
import Footer from './footer';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return (
        <div>
            <Route path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ Splash } />
            <AuthRoute path="/signin" component={ SessionContainer } />
            <Route path="/" component={ Footer } />
            {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
        </div>
    )
}

export default App;