import React from 'react';
import { Route } from 'react-router-dom';
// import NavBarContainer from './navbar/navbar_container';
import NavBar from './navbar/navbar'
import SignupContainer from './session/signup_container';
// import Signup from './session/session_form';

const App = () => {
    return (
        <div>
            <Route path="/" component={NavBar} />
            <Route path="/signup" component={SignupContainer} />
            {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
        </div>
    )
}

export default App;