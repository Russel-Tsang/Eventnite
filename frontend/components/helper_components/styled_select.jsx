import React from 'react'; 

const StyledSelect = (props) => {
    let selectArrow = props.color === "white" ? window.selectArrowWhite : window.selectArrow;
    return (  
        <div className="styled-select-container">
            <select className="styled-select" onChange={props.onChange}>
                {props.children}
            </select>
            <img src={selectArrow} />
        </div>
    );
}
 
export default StyledSelect;