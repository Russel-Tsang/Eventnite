import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SplashContainer from './splash/splash_container';
import SessionContainer from './session/session_form_container';
// import Footer from './footer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import EventFormContainer from './events/event_form/event_form_container';
import EventShowContainer from './events/event_show/event_show_container';
import EventDashboardContainer from './events/event_dashboard/dashboard_container';
import EventDashboardHomeContainer from './events/event_dashboard/dashboard_home_container';
import DetailsContainer from './events/event_dashboard/details_container';
import Modal from './helper_components/modal/modal';
import ProfileDropdown from './helper_components/profile_dropdown';

const App = () => {
    return (
        <div>
            <Route path="/" component={ NavBarContainer } />
            <Route exact path="/" component={ SplashContainer } />
            <AuthRoute path="/signin" component={ SessionContainer } />
            <ProtectedRoute exact path="/create_event" component={ EventFormContainer } />
            <Route path="/events/:eventId" component={EventShowContainer} />
            <ProtectedRoute path="/dashboard/" component={EventDashboardContainer} />
            <ProtectedRoute exact path="/dashboard/all" component={EventDashboardHomeContainer} />
            <ProtectedRoute exact path="/dashboard/edit/:eventId" component={EventFormContainer} />
            <ProtectedRoute exact path="/dashboard/details/:eventId" component={DetailsContainer} />

            {/* testing */}
            <Route path="/modal" component={Modal} />
            <Route path="/dropdown" component={ProfileDropdown} />
            {/* testing */}
        </div>
    )
}

export default App;