import React from 'react';
import StyledSelect from '../helper_components/styled_select';
import { TagButton } from '../helper_components/tag_button';

const FilterBar = (props) => {
    let categories = props.categories.map((category, idx) => (
        <option key={`category-${idx}`}>{category}</option>
    ));

    debugger

    // render either the select tag or the button that removes the filter selection
    let categoryFilter, priceFilter;
    if (props.categoryButtonText) {
        categoryFilter = (
            <TagButton
                tag={props.categoryButtonText}
                onClick={props.onCategoryButtonClose}
                color={"white"}
            />
        );
    } else {
        categoryFilter = (
            <StyledSelect onChange={props.onCategoryChange}>
                {categories}
            </StyledSelect>
        );
    }

    if (props.priceButtonText) {
        priceFilter = (
            <TagButton
                tag={props.priceButtonText}
                onClick={props.onPriceButtonClose}
                color={"white"}
            />
        );
    } else {
        priceFilter = (
            <StyledSelect onChange={props.onPriceChange}>
                <option>Any price</option>
                <option>Free</option>
                <option>Paid</option>
            </StyledSelect>
        );
    }
    
    return (  
        <div className="filter-bar">
            <span>
                <h1>Live your best life</h1>
            </span>
            <span className="filter-bar-select-span">
                {/* <StyledSelect onChange={props.onPriceChange}>
                    <option>Any price</option>
                    <option>Free</option>
                    <option>Paid</option>
                </StyledSelect> */}
                {priceFilter}
                {categoryFilter}
            </span>
        </div>
    );
}
 
export default FilterBar;