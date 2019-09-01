import React from 'react';
import SearchSection from './search_section';
import StyledSelect from '../styled_select';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchSection label="Looking for">
                <input placeholder="Event" type="text"/>
            </SearchSection>
            <SearchSection label="In">
                <input className="search-bar-input-location" value="New York" type="text" />
            </SearchSection>
            <SearchSection label="On">
                <StyledSelect color="white">
                    <option>
                        Any Date
                    </option>
                </StyledSelect>
            </SearchSection>
            <div className="search-button">
                <img src={window.searchIconWhite} />
            </div>
        </div>
    );
}
 
export default SearchBar;