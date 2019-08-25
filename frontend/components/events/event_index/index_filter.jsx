import React from 'react';

const IndexFilter = (props) => {
    return ( 
        <div className="index-filter">
            <select>
                <option>Any Date</option>
            </select>
            <button onClick={props.onFiltersClick}>More filters</button>
        </div>
    );
}
 
export default IndexFilter;