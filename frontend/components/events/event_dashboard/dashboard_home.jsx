import React, { Component } from 'react';
import DashboardRow from './dashboard_row';

class DashBoard extends Component {
    render() { 
        const CATEGORIES = [
            'Category',
            'Auto',
            'Boat & Air',
            'Business & Professional',
            'Charities and Causes',
            'Community and Culture',
            'Family and Education'
        ]

        let categories = CATEGORIES.map((category, idx) => (
            <option key={`category-${idx}`}>{category}</option>
        ));

        return (  
            <div className="dashboard-home">
                <div><h1>Events</h1></div>
                <div className="dashboard-search">
                    <input type="text" />
                    <select>
                        {categories}
                    </select>
                </div>
                <header className="dashboard-index-head">
                    <span>Event</span>
                </header>
                <DashboardRow imgSrc={window.photoBalloons}/>
            </div>
        );
    }
}
 
export default DashBoard;