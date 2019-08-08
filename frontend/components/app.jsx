import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import SessionContainer from './session/session_form_container';
import Footer from './footer';
import { AuthRoute } from '../util/route_util';
import EventFormContainer from './events/event_form/event_form_container';
import EventShowContainer from './events/event_show/event_show_container';
import EventDashboard from './events/event_dashboard/event_dashboard';
import Modal from './helper_components/modal/modal';
import ProfileDropdown from './helper_components/profile_dropdown';

const App = () => {
    return (
        <div>
            <Route path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ SplashContainer } />
            <AuthRoute path="/signin" component={ SessionContainer } />
            <Route exact path="/create_event" component={ EventFormContainer } />
            <Route path="/events/:eventId" component={EventShowContainer} />
            <Route exact path="/dashboard/" component={EventDashboard} />
            <Route exact path="/dashboard/:eventId" component={EventDashboard} />
            {/* testing */}
            <Route path="/modal" component={Modal} />
            <Route path="/dropdown" component={ProfileDropdown} />
            {/* testing */}
            {/* <Route path="/" component={ Footer } /> */}
        </div>
    )
}

export default App;