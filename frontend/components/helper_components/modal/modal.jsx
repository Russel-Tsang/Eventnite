import React from 'react';
import ModalPane from './modal_pane';

const Modal = (props) => {
    return (  
        <div className="modal">
            <ModalPane closeModal={props.closeModal} onClick={props.onClick}/>
        </div>
    );
}
 
export default Modal;