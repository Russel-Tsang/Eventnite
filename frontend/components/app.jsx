import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import SessionContainer from './session/session_form_container';
import Footer from './footer';
import { AuthRoute } from '../util/route_util';
import EventForm from './events/event_form';
import EventCard from './helper_components/event_card';
import EventShowContainer from './events/event_show_container';

const App = () => {
    return (
        <div>
            <Route path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ Splash } />
            <AuthRoute path="/signin" component={ SessionContainer } />
            <Route exact path="/create_event" component={ EventForm } />
            <Route exact path="/show_event" component={ EventShowContainer } />
            <Route exact path="/show_event_card" component={ EventCard } />
            {/* <Route path="/" component={ Footer } /> */}
            {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
        </div>
    )
}

export default App;