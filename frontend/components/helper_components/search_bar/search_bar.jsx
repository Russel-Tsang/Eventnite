import React from 'react';
import SearchSection from './search_section';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchSection label="Looking for">
                <input placeholder="Event" type="text"/>
            </SearchSection>
            <SearchSection label="In">
                <input placeholder="New York" type="text" />
            </SearchSection>
            <SearchSection label="On">
                <select selected="Any Date">
                    <option>
                        Any Date
                    </option>
                </select>
            </SearchSection>
            <div className="search-button">
                <img src={window.searchIconWhite} />
            </div>
        </div>
    );
}
 
export default SearchBar;