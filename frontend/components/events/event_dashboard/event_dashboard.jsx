import React, { Component } from 'react';
import Section from './section';
import CheckBar from './check_bar';
import EventFormContainer from '../event_form/event_form_container';
import MainContainer from './main_container';
import Details from './details';

class EventDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainContainer: <Details />
        }

        this.renderComponent = this.renderComponent.bind(this);
    }

    renderComponent(component) {
        switch(component) {
            case("EditForm"): 
                this.setState({ mainContainer: <EventFormContainer/> })
                break;
            case("Details"): 
                this.setState({ mainContainer: <Details/> })
                break;
        }
    }

    render() { 
        debugger
        return (
            <>
            <aside className="dashboard-panel">
                <Section heading={"Grad Party"} time={"3:00 PM"}/>
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