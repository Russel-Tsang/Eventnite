import React, { Component } from 'react';
import TicketBar from '../ticket_bar';
import { withRouter } from 'react-router-dom';
import { toMonth, toTime } from '../../../util/calculations';

class ModalPane extends Component {
    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    render() {
        const event = this.props.events[0];
        const { title, begin_month, begin_day, begin_year, begin_time, end_month, end_day, end_year, end_time, description } = event
        return (
            <div className="modal-pane">
                <div className="modal-left">
                    <header>
                        <h2>
                            {title}
                        </h2>
                        <span>{`${toMonth(begin_month)} ${begin_day}, ${begin_year} ${toTime(begin_time)} - ${toMonth(end_month)} ${end_day}, ${end_year}, ${toTime(end_time)}`}</span>
                        {event.date}
                    </header>
                    <main>
                        <div className="modal-details">
                            <span>
                                <h3>***{title}***</h3>
                            </span>
                            <span>
                                {description}
                            </span>
                            <hr/>
                        </div>
                    </main>
                    <TicketBar buttonText={"Register"} onClick={this.props.onClick} />
                </div>
                <aside className="modal-right">
                    <div className="modal-right-image">
                        <span onClick={this.props.closeModal} className="close-icon-span">
                            <img className="close-icon" src={window.closeIcon} />
                        </span>
                        <img src={window.photoBalloons} />
                    </div>
                    <div className="order-summary">
                        <div>Order Summary</div>
                        <div>
                            <span>
                                price: 
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