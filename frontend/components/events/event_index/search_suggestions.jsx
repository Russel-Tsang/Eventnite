import React, { Component } from 'react';
import SearchSuggestionRow from './search_suggestion_row';

class SearchSuggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainSearchValue: this.props.mainSearchValue || '',
            searchSuggestionDisplay: 'display-none'
        }
    }

    componentDidMount() {
        this.mousedownFunc = () => {
            let searchSuggestions = document.querySelector('.index-search-suggestions');
            if (event.target.className === 'index-search-event-input') {
                this.setState({ searchSuggestionDisplay: '' });
                searchSuggestions.classList.remove('display-none');
            // if mouse clicks anywhere outside of search-suggestions div, close the div
            } else if (!event.path.includes(searchSuggestions)) {
                this.setState({ searchSuggestionDisplay: 'display-none' });
            } 
        }
        document.addEventListener('mousedown', this.mousedownFunc);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.mousedownFunc);
    }

    render() {
        let categories = [
            ['Music', window.musicIcon],
            ['Food & Drink', window.drinkIcon],
            ['Business', window.businessIcon],
            ['Performing and Visual Arts', window.theatreIcon],
            ['Health', window.heartIcon]
        ]
        .map((category, idx) => <SearchSuggestionRow key={idx} img={category[1]} label={category[0]} onCategoryClick={this.props.onCategoryClick} />)

        let indexRows = this.props.indexRows.filter(row => {
            if (row.props.title.toLowerCase().includes(this.props.mainSearchValue.toLowerCase())) return row;
        });

        let categoryRows = this.props.mainSearchValue ? null : (
            <>
                <header className="search-suggestion-header">
                    Categories
                </header>
                {categories}
            </>
        );

        return (
            <div className={`index-search-suggestions ${this.state.searchSuggestionDisplay}`}>
                {categoryRows}
                <header className="search-suggestion-header">
                    Events
                </header>
                {indexRows}
            </div>
        );
    }

}

 
export default SearchSuggestions;