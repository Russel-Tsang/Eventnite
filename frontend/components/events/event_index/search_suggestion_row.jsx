import React from 'react';

const SearchSuggestionRow = (props) => {
    debugger
    return ( 
        <div className="search-suggestion-row" onClick={props.onCategoryClick}>
            <span>
                <img src={props.img} />
            </span>
            <span className="search-suggestion-label">
                {props.label}
            </span>
        </div>
    );
}
 
export default SearchSuggestionRow;