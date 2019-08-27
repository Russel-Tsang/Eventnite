import React from 'react';
import StyledSelect from '../../helper_components/styled_select';

const IndexFilter = (props) => {
    return ( 
        <div className="index-filter">
            <StyledSelect>
                <option>Any Date</option>
            </StyledSelect>
            <button className="tag-button" onClick={props.onFiltersClick}>More filters</button>
        </div>
    );
}
 
export default IndexFilter;