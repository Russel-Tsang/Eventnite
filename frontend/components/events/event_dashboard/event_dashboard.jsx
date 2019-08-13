import React, { Component } from 'react';
import Section from './section';
import CheckBar from './check_bar';
import { Link } from 'react-router-dom';

class EventDashboard extends Component {
    constructor(props) {
        super(props);    
    }

    // handleRender() {

    // }

    render() { 
        return (
            <aside className="dashboard-panel">
                <Section heading={"Grad Party"} month={"Jul"} date={"09"} year={'2077'} time={"3:00 PM"}/>
                <Link to="/dashboard"><div className="dashboard-link">Dashboard</div></Link>
                <CheckBar onClick={() => this.handleRender("EditForm")} label={"Basic Info"}/>
                <CheckBar onClick={() => this.handleRender("Details")} label={"Details"}/>
                <CheckBar label={"Tickets"}/>
            </aside>
        );
    }
}
 
export default EventDashboard;