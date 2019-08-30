import React from 'react';
import SearchSuggestionRow from './search_suggestion_row';

const SearchSuggestions = (props) => {
    let categories = [
        'Music',
        'Food & Drink',
        'Business',
        'Performing and Visual Arts',
    ]
    .map(category => <SearchSuggestionRow label={category} onCategoryClick={props.onCategoryClick}/>)

    return ( 
        <div className="index-search-suggestions">
            <header className="search-suggestion-header">
                Categories
            </header>
            {categories}
            
            <header className="search-suggestion-header">
                Events
            </header>
            {props.indexRows}
        </div>
    );
}
 
export default SearchSuggestions;