import React, { Component } from 'react';
import Section from './section';
import CheckBar from './check_bar';
import MainContainer from './main_container';
import { Link } from 'react-router-dom';

class EventDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainContainer: "home"
        }
        this.renderComponent = this.renderComponent.bind(this);
    }

    showEventForm() {
        this.setState({ mainContainer: "event form" })
    }

    renderComponent(component) {
        switch(component) {
            case("EditForm"): 
                if (!this.props.match.params.eventId) return;
                this.setState({ mainContainer: "event form" })
                break;
            case("Details"): 
                if (!this.props.match.params.eventId) return;
                this.setState({ mainContainer: "details" })
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
            <MainContainer showEventForm={this.showEventForm.bind(this)} component={this.state.mainContainer} />
            </>
        );
    }
}
 
export default EventDashboard;