import React from 'react';

const SearchSection = (props) => {
    return (  
        <div className="search-section">
            <div className="section-label">{props.label}</div>
            {props.children}
        </div>
    );
}
 
export default SearchSection;