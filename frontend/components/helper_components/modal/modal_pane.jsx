import React, { Component } from 'react';
import TicketBar from '../ticket_bar';
import { withRouter } from 'react-router-dom';
import { toMonth, toTime } from '../../../util/calculations';

class ModalPane extends Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    componentDidUpdate() {
        let description = document.querySelector('.modal-details-description');
        if (description.innerText.includes('<p>')) description.innerHTML = description.innerText.split("</p>").join("</p> <br>");
    }

    render() {
        const event = this.props.events[0];
        const { title, beginMonth, beginDay, beginYear, beginTime, endMonth, endDay, endYear, endTime, description, pictureUrl } = event
        return (
            <div className="modal-pane">
                <div className="modal-left">
                    <header>
                        <h2>
                            {title}
                        </h2>
                        <span>{`${toMonth(beginMonth)} ${beginDay}, ${beginYear} ${toTime(beginTime)} - ${toMonth(endMonth)} ${endDay}, ${endYear}, ${toTime(endTime)}`}</span>
                        {event.date}
                    </header>
                    <main>
                        <div className="modal-details">
                            <span>
                                <h3>***{title}***</h3>
                            </span>
                            <span className="modal-details-description">
                                {description}
                            </span>
                            <hr/>
                        </div>
                    <TicketBar buttonText={"Register"} onClick={this.props.onClick} />
                    </main>
                </div>
                <aside className="modal-right">
                    <div className="modal-right-image">
                        <span onClick={this.props.closeModal} className="close-icon-span">
                            <img className="close-icon" src={window.closeIcon} />
                        </span>
                        <img src={pictureUrl} />
                    </div>
                    <div className="order-summary">
                        <div>Order Summary</div>
                        <div>
                            <span>
                                Price: 
                            </span>
                            <span>
                                {`$${event.price}.00`}
                            </span>
                        </div>
                        <div>
                            <span>
                                Total
                        </span>
                            <span>
                                {`$${event.price}.00`}
                        </span>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
}
 
export default withRouter(ModalPane);