import React, { Component } from 'react';
import DashboardSection from './section';
import CheckBar from './check_bar';
import { toMonth, toTime } from '../../../util/calculations';
import { Link, withRouter } from 'react-router-dom';

class EventDashboard extends Component {
    constructor(props) {
        super(props);    

        this.handleRender = this.handleRender.bind(this);
        this.state = {
            eventId: '',
            selectedStatuses: {
                "edit": '',
                "details": ''
            }
        }
    }

    componentDidMount() {
        this.setEventId();
        this.setSelectedStatus();
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.setEventId();
            this.setSelectedStatus();
        }
    }


    setEventId() {
        let pathName = this.props.location.pathname.split("/");
        let eventId = Number(pathName[pathName.length - 1]);
        this.setState({ eventId });
    }    

    setSelectedStatus() {
        let edit = this.props.location.pathname.slice(0, 15) === '/dashboard/edit' ? 'checkbar-selected' : '';
        let details = this.props.location.pathname.slice(0, 18) === '/dashboard/details' ? 'checkbar-selected' : '';
        let selectedStatuses = {
            edit,
            details
        };
        this.setState({ selectedStatuses })
    }

    handleRender(dashboardPage) {
        // add effects if button is disabled
        if (this.props.location.pathname === '/dashboard/all') return;
        switch (dashboardPage) {
            case "EditForm":
                this.props.history.push(`/dashboard/edit/${this.state.eventId}`);
                break;
            case "Details":
                this.props.history.push(`/dashboard/details/${this.state.eventId}`);
                break;
        }
    } 

    render() { 
        let { title, beginMonth, beginDay, beginYear, beginTime } = this.props.event;
        let eventChosen = this.props.location.pathname === "/dashboard/all" ? false : true;
        let selectedStatus = this.props.location.pathname === "/dashboard/all" ? 'checkbar-selected' : '';
        return (
            <aside className="dashboard-panel">
                <DashboardSection heading={title} month={toMonth(beginMonth)} date={beginDay} year={beginYear} time={toTime(beginTime)} eventChosen={eventChosen}/>
                <Link className={selectedStatus} to="/dashboard/all"><div className="dashboard-link">Dashboard</div></Link>
                <CheckBar onClick={() => this.handleRender("EditForm")} label={"Basic Info"} selectedStatus={this.state.selectedStatuses.edit}/>
                <CheckBar onClick={() => this.handleRender("Details")} label={"Details"} selectedStatus={this.state.selectedStatuses.details}/>
            </aside>
        );
    }
}
 
export default EventDashboard;