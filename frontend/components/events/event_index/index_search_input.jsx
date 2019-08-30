import React from 'react';
import SearchSuggestions from './search_suggestions';

const IndexSearchInput = (props) => {
    return ( 
        <div className="index-search-container">
            <div className="index-search-event">
                <div className="index-search-input-container">
                    <input className="index-search-event" placeholder="Search anything"/>
                    <SearchSuggestions indexRows={props.indexRows} onCategoryClick={props.onCategoryClick}/>
                </div>
            </div>
            <div className="index-search-location">
                <p>in </p>
                <div className="index-search-input-container">
                    <input className="index-search-location" placeholder="New York"/>
                    {/* <div className="index-search-suggestions"/> */}
                </div>
            </div>
        </div>
    );
}
 
export default IndexSearchInput;