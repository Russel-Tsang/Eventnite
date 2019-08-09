import React, { Component } from 'react';

const PriceInput = props => {
    return (
        <div className="price-input">
            <p>$</p>
            <input type="text" id="venueNameInput" placeholder=" Price per ticket" value={props.value} onChange={props.onChange} />
        </div>
    );
} 
 
export default PriceInput;