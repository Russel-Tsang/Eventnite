import React from 'react';
import StyledSelect from '../../helper_components/styled_select';

const FiltersAside = (props) => {
    let showAside = props.showAside ? 'filters-aside-show' : '';
    
    const CATEGORIES = [
        'Auto',
        'Business & Professional',
        'Community & Culture',
        'Family & Education',
        'Film & Media',
        'Food & Drink',
        'Health',
        'Hobbies',
        'Home & Lifestyle',
        'Music',
        'Performing and Visual Arts',
        'Science & Tech'
    ].map((category, idx) => <option key={`category-${idx}`}>{category}</option>);

    const TYPES = [
        'Appearance or Signing',
        'Attraction, Camp, Trip, or Retreat',
        'Class, Training, or Workshop',
        'Concert or Performance',
        'Conference',
        'Convention',
        'Dinner or Gala',
        'Festival or Fair',
        'Game or Competition',
        'Meeting or Networking Event',
        'Party or Social Gathering',
        'Race or Endurance Event',
        'Rally',
        'Screening',
        'Seminar or Talk'
    ].map((type, idx) => <option key={`type-${idx}`}>{type}</option>);

    const PRICES = ["Free", "Paid"].map((priceOption, idx) => <option key={`price-${idx}`}>{priceOption}</option>);

    return ( 
        <aside className={`filters-aside ${showAside}`}>
            <header className="filters-aside-header">
                <h2>More filters</h2>
            </header>
            <main className="filters-aside-main">
                <StyledSelect onChange={props.onCategoryChange}>
                    <option>Any category</option>
                    {CATEGORIES}
                </StyledSelect>
                <StyledSelect onChange={props.onTypeChange}>
                    <option>Any event type</option>
                    {TYPES}
                </StyledSelect>
                <StyledSelect onChange={props.onPriceChange}>
                    <option>Any price</option>
                    {PRICES}
                </StyledSelect>
                <div className="filters-aside-buttons">
                    <div className="button-1" onClick={props.onCloseClick}>
                        Close
                    </div>
                    <div className="button-1" onClick={props.onApplyClick}>
                        Apply
                    </div>
                </div>
            </main>
        </aside>
    );
}
 
export default FiltersAside;