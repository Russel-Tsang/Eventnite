import React, { Component } from 'react';
import DashboardRow from './dashboard_row';
import { toMonth } from '../../../util/calculations';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchCreatedEvents(this.props.currentUser);
    }

    handleMenuClick(id) {
        return () => {
            this.props.deleteEvent(id) 
        }
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ searchTerm: event.target.value });
    }

    renderDashboardRows() {
        let events = this.props.events;
        if (this.state.searchTerm) {
            events = events.filter(event => event.title.includes(this.state.searchTerm))
        }

        let dashboardRows = events.map((event, idx) => (
            <DashboardRow
                key={`row-${idx}`}
                title={event.title}
                beginMonth={toMonth(event.begin_month)}
                beginDay={event.begin_day}
                beginTime={event.begin_time}
                imgSrc={event.pictureUrl}
                onMenuClick={this.handleMenuClick(event.id)}
            />
        ));

        return dashboardRows;
    }

    render() { 
        return (  
            <div className="dashboard-home">
                <div><h1>Events</h1></div>
                <div className="dashboard-search">
                    <img src={window.searchIcon}/>
                    <input type="text" placeholder="Search events" onChange={this.handleChange} />
                </div>
                <header className="dashboard-index-head">
                    <span>Event</span>
                </header>
                {this.renderDashboardRows()}
            </div>
        );
    }
}
 
export default Dashboard;