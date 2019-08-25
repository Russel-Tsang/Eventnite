import React from 'react'; 

const StyledSelect = (props) => {
    return (  
        <div className="styled-select-container">
            <select className="styled-select">
                {props.children}
            </select>
            <img src={window.selectArrow} />
        </div>
    );
}
 
export default StyledSelect;