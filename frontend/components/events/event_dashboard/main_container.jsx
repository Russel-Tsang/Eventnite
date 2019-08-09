import React from 'react';
import EventFormContainer from '../event_form/event_form_container';
// import MainContainer from './main_container';
import DetailsContainer from './details_container';
import DashboardHomeContainer from './dashboard_home_container';
import { withRouter } from 'react-router-dom'; 

class MainContainer extends React.Component {

    componentDidMount() {
        if (this.props.component === "home" && this.props.match.params.eventId) {
            this.props.showEventForm();
        }
    }

    render() {
        let Component;
        let props;
        switch (this.props.component) {
            case "event form":
                Component = EventFormContainer;
                props = {
                    formType: "Update",
                    eventId: this.props.match.params.eventId,
                }
                break;
            case "home":
                Component = DashboardHomeContainer;
                break;
            case "details":
                Component = DetailsContainer;
                break;
        }
        return (
            <div className="main-container">
                <Component {...props} />
            </div>
        )
    }
    

}
 
export default withRouter(MainContainer);