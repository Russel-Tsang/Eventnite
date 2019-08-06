import React, { Component } from 'react';
import Section from './section';
import CheckBar from './check_bar';
import EventFormContainer from '../event_form/event_form_container';
import MainContainer from './main_container';
import DetailsContainer from './details_container';
import DashboardHome from './dashboard_home';

class EventDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainContainer: <DashboardHome />
        }

        this.renderComponent = this.renderComponent.bind(this);
    }

    renderComponent(component) {
        switch(component) {
            case("EditForm"): 
                this.setState({ mainContainer: <EventFormContainer formType="Update" eventId={this.props.match.params.eventId}/> })
                break;
            case("Details"): 
                this.setState({ mainContainer: <DetailsContainer/> })
                break;
        }
    }

    render() { 
        return (
            <>
            <aside className="dashboard-panel">
                <Section heading={"Grad Party"} month={"Jul"} date={"09"} year={'2077'} time={"3:00 PM"}/>
                <a><div className="dashboard-link">Dashboard</div></a>
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