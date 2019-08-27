import React from 'react';

const SubmitBar = ({ onSubmitClick, onDiscardClick, submitBarShow }) => {
    return ( 
        <div className={`submit-bar ${submitBarShow}`}>
            <button className="button-1" onClick={onDiscardClick}>Discard</button>
            <button className="button-1" onClick={onSubmitClick}>Submit</button>
        </div>
    );
}
 
export default SubmitBar;