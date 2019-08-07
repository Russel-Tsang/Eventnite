import React from 'react';

const FilterBar = (props) => {
    return (  
        <div className="filter-bar">
            <span>
                <h1>Live your best life</h1>
            </span>
            <span>
                <select selected="Any Price">
                    <option>
                        Free
                    </option>
                </select>
                <select selected="Any Category"> 
                    <option>
                        Boat or Air
                    </option>
                    <option>
                        Community and Culture
                    </option>
                </select>
            </span>
        </div>
    );
}
 
export default FilterBar;