import React from 'react';
import SearchSuggestions from './search_suggestions';

const IndexSearchInput = (props) => {
    return ( 
        <div className="index-search-container">
            <div className="index-search-event">
                <div className="index-search-input-container">
                    <input 
                        className="index-search-event-input" 
                        value={props.searchValue} 
                        onChange={props.onSearchChange}
                        placeholder="Search anything"
                        onKeyPress={props.onKeyPress}
                    />
                    <SearchSuggestions 
                        indexRows={props.indexRows} 
                        onCategoryClick={props.onCategoryClick}
                        searchValue={props.searchValue}
                    />
                </div>
            </div>
            <div className="index-search-location">
                <p>in </p>
                <div className="index-search-input-container">
                    <input className="index-search-location-input" value="New York" onChange={() => {}}/>
                </div>
            </div>
        </div>
    );
}
 
export default IndexSearchInput;