import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
import NavBar from './navbar/navbar'
import SessionContainer from './session/session_form_container';
// import Signup from './session/session_form';
import Footer from './footer';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return (
        <div>
            <Route path="/" component={NavBar} />
            <Route exact path="/signin" component={SessionContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={Footer} />
            {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
        </div>
    )
}

export default App;