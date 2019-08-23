import React, { Component } from 'react';
import PopupMenu from '../../helper_components/popup_menu';
import { toTime } from '../../../util/calculations';

class DashboardRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.handleDisplay = this.handleDisplay.bind(this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay(bool) {
        debugger
        return (event) => {
            debugger
            if (bool === false && event.target.className !== 'popup-menu-button') this.setState({ display: false });
            if (bool === true) this.setState({ display: true });
        }
        // if (event.target.className !== 'popup-menu-button') this.setState({ display: false });
    }

    handleDisplay() {
        this.setState({ display: true });
    }

    componentDidMount() {
        this.mouseDownFunc = this.toggleDisplay(false)
        document.body.addEventListener('mousedown', this.mouseDownFunc);
    }

    componentWillUnmount() {
        document.body.removeEventListener('mousedown', this.mouseDownFunc);
    }

    render() {
        let displayClass = this.state.display ? 'display' : 'display-none';
        return (
            <div className="dashboard-row">
                <span>
                    <span className="row-date">
                        <span>
                            {this.props.beginMonth}
                        </span>
                        <span>
                            {this.props.beginDay}
                        </span>
                    </span>
                    <img 
                        src={this.props.imgSrc} 
                        onClick={this.props.onClick}
                        className="dashboard-row-img"
                    />
                    <span>
                        <span>{this.props.title}</span>
                        <span>
                            <p>{this.props.venueName}</p>
                            <p>{this.props.beginTime}</p>
                        </span>
                    </span>
                </span>
                {/* <span onClick={this.props.onMenuClick}> */}
                <span className="menu-icon-span">
                    <img 
                        className="menu_icon" 
                        src="https://aa-file-upload-dev.s3.amazonaws.com/menu_icon.svg" 
                        onClick={this.toggleDisplay(true)} 
                    />
                    <PopupMenu 
                        displayClass={displayClass}
                        onEditClick={this.props.onEditClick}
                        onDeleteClick={this.props.onDeleteClick}
                    />   
                </span>
            </div>
        );
    }
}
 
export default DashboardRow;