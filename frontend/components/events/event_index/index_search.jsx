import React from 'react';
import IndexSearchInput from './index_search_input';

const IndexSearch = (props) => {
    return ( 
        <div className="index-search-section">
            <IndexSearchInput 
                indexRows={props.indexRows} 
                onCategoryClick={props.onCategoryClick}
                searchValue={props.searchValue}
                onSearchChange={props.onSearchChange}
                onKeyPress={props.onKeyPress}
            />
            <div className="index-search-button-div">
                <div className="button-1 index-search-button" onClick={props.onSearchClick}>
                    Search
                </div>
            </div>
        </div>
    );
}
 
export default IndexSearch;