import React, { Component } from 'react';
import SearchSuggestionRow from './search_suggestion_row';

class SearchSuggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexRows: '',
            mainSearchValue: this.props.mainSearchValue,
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

        let indexRows = this.props.indexRows.filter(row => {
            if (row.props.title.toLowerCase().includes(this.props.mainSearchValue.toLowerCase())) return row;
        });
        this.setState({ indexRows });
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.mousedownFunc);
    }

    componentDidUpdate(prevProps) {
        if (this.props.mainSearchValue !== prevProps.mainSearchValue) {
            let indexRows = this.props.indexRows.filter(row => {
                if (row.props.title.toLowerCase().includes(this.props.mainSearchValue.toLowerCase())) return row;
            });
            this.setState({ indexRows });
        }
    }

    render() {
        let categories = [
            'Music',
            'Food & Drink',
            'Business',
            'Performing and Visual Arts',
            'Health'
        ]
        .map((category, idx) => <SearchSuggestionRow key={idx} label={category} onCategoryClick={this.props.onCategoryClick} />)

        return (
            <div className={`index-search-suggestions ${this.state.searchSuggestionDisplay}`}>
                <header className="search-suggestion-header">
                    Categories
            </header>
                {categories}

                <header className="search-suggestion-header">
                    Events
            </header>
                {this.state.indexRows}
            </div>
        );
    }

}

 
export default SearchSuggestions;