import React from 'react';
import SearchSection from './search_section';
import StyledSelect from '../styled_select';

const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <SearchSection label="Looking for">
                <input 
                    placeholder="Event" 
                    type="text" 
                    onChange={props.onSearchInputChange('searchTerm')}
                    onKeyPress={props.onKeyPress}
                />
            </SearchSection>
            <SearchSection label="In">
                <input 
                    className="search-bar-input-location" 
                    value="New York" 
                    onChange={() => {}} type="text" 
                    onKeyPress={props.onKeyPress}
                />
            </SearchSection>
            <SearchSection label="On">
                <StyledSelect color="white" onChange={props.onSearchInputChange('searchDayFilter')}>
                    <option>Any Date</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                </StyledSelect>
            </SearchSection>
            <div className="search-button" onClick={props.onSearchClick}>
                <img src={window.searchIconWhite} />
            </div>
        </div>
    );
}
 
export default SearchBar;