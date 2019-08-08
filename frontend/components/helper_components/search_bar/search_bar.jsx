import React from 'react';
import SearchSection from './search_section';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchSection label="Looking for">
                <input type="text"/>
            </SearchSection>
            <SearchSection label="In">
                <input type="text" />
            </SearchSection>
            <SearchSection label="On">
                <select>
                    <option>
                        test
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