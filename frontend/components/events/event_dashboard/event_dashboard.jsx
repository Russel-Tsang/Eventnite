import React, { Component } from 'react';
import Section from './section';
import CheckBar from './check_bar';
import EventFormContainer from '../event_form/event_form_container';
import MainContainer from './main_container';
import DetailsContainer from './details_container';
import DashboardHomeContainer from './dashboard_home_container';
import { Link } from 'react-router-dom';

class EventDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainContainer: <DashboardHomeContainer />
        }

        this.renderComponent = this.renderComponent.bind(this);
    }

    componentDidUpdate() {
        debugger
    }

    renderComponent(component) {
        switch(component) {
            case("EditForm"): 
                if (!this.props.match.params.eventId) return;
                this.setState({ mainContainer: <EventFormContainer formType="Update" eventId={this.props.match.params.eventId}/> })
                break;
            case("Details"): 
                if (!this.props.match.params.eventId) return;
                this.setState({ mainContainer: <DetailsContainer/> })
                break;
        }
    }

    render() { 
        return (
            <>
            <aside className="dashboard-panel">
                <Section heading={"Grad Party"} month={"Jul"} date={"09"} year={'2077'} time={"3:00 PM"}/>
                <Link to="/dashboard"><div className="dashboard-link">Dashboard</div></Link>
                <CheckBar onClick={() => this.renderComponent("EditForm")} label={"Basic Info"}/>
                <CheckBar onClick={() => this.renderComponent("Details")} label={"Details"}/>
                <CheckBar label={"Tickets"}/>
            </aside>
            <MainContainer>
                {this.state.mainContainer}
            </MainContainer>
            </>
        );
    }
}
 
export default EventDashboard;