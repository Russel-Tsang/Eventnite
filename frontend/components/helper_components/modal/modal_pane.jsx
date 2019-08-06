import React from 'react';
import TicketBar from '../ticket_bar';

const ModalPane = (props) => {
    return (  
        <div className="modal-pane">
            <div className="modal-left">
                <header>
                    <h2>
                        ROOFTOP PARTY | SATURDAY NIGHT | Sky Room NYC Tallest Rooftop
                    </h2>
                    <span>this is the spanniest span of all time</span>
                    {/* props.date */}
                </header>
                <main>f</main>
                <TicketBar buttonText={"Register"} onClick={props.onClick}/>
            </div>
            <aside className="modal-right">
                <img src={window.photoBalloons} />
                <div className="order-summary">
                    <div>Order Summary</div>
                    <div>
                        <span>
                            1 x **ICLUBNYC LIST** ladies free before 12 / gents 20
                        </span>
                        <span>
                            $0.00
                        </span>
                    </div>
                    <div>
                        <span>
                            Total
                        </span>
                        <span>
                            $0.00
                        </span>
                    </div>
                </div>
            </aside>
        </div>
    );
}
 
export default ModalPane;