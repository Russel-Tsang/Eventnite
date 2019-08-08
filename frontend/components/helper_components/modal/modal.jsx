import React from 'react';
import ModalPaneContainer from './modal_pane_container';

const Modal = (props) => {
    return (  
        <div className="modal">
            <ModalPaneContainer
                eventId={props.eventId} 
                closeModal={props.closeModal} 
                onClick={props.onClick}/>
        </div>
    );
}
 
export default Modal;