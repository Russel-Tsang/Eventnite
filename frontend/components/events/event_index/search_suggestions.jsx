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
            // prevents clicking on suggestion div from hiding suggestion div
            if (!event.target.className.split('-').includes('search')) {
                this.setState({ searchSuggestionDisplay: 'display-none' });
            } else if (event.target.className === 'index-search-event-input') {
                this.setState({ searchSuggestionDisplay: '' })
            }
        }
        document.addEventListener('mousedown', this.mousedownFunc);
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