import React from 'react';
import IndexSearchInput from './index_search_input';

const IndexSearch = (props) => {
    return ( 
        <div className="index-search-section">
            <IndexSearchInput />
            <div className="index-search-button-div">
                <div className="button-1 index-search-button">Search</div>
            </div>
        </div>
    );
}
 
export default IndexSearch;