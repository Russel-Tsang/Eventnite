import React from 'react';

const SearchSuggestionRow = (props) => {
    return ( 
        <div className="search-suggestion-row" onClick={props.onCategoryClick}>
            <span>
                {props.img}
            </span>
            <span className="search-suggestion-label">
                {props.label}
            </span>
        </div>
    );
}
 
export default SearchSuggestionRow;