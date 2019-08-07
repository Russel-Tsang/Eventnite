import React from 'react';
import SearchSection from './search_section';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchSection label="Looking for">
                <input type="text" />
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
        </div>
    );
}
 
export default SearchBar;