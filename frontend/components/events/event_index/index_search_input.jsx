import React from 'react';

const IndexSearchInput = (props) => {
    return ( 
        <div className="index-search-container">
            <div className="index-search-event">
                <div className="index-search-input-container">
                    <input className="index-search-event" placeholder="Search anything"/>
                    <div className="index-search-suggestions" />
                </div>
            </div>
            <div className="index-search-location">
                <p>in </p>
                <div className="index-search-input-container">
                    <input className="index-search-location" placeholder="New York"/>
                    <div className="index-search-suggestions"/>
                </div>
            </div>
        </div>
    );
}
 
export default IndexSearchInput;