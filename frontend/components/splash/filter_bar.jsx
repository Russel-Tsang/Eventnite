import React from 'react';

const FilterBar = (props) => {
    let categories = props.categories.map((category, idx) => (
        <option key={`category-${idx}`}>{category}</option>
    ));
    
    return (  
        <div className="filter-bar">
            <span>
                <h1>Live your best life</h1>
            </span>
            <span>
                <select onChange={props.onPriceChange}>
                    <option>
                        Any Price
                    </option>
                    <option>
                        Free
                    </option>
                    <option>
                        Paid
                    </option>
                </select>
                <select onChange={props.onCategoryChange}> 
                    {categories}
                </select>
            </span>
        </div>
    );
}
 
export default FilterBar;