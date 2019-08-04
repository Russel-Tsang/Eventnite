import React from 'react';

const SubmitBar = ({ onClick }) => {
    return ( 
        <div className="submit-bar display">
            <button className="button-1">Discard</button>
            <button className="button-1" onClick={onClick}>Submit</button>
        </div>
    );
}
 
export default SubmitBar;