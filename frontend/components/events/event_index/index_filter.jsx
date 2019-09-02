import React from 'react';
import StyledSelect from '../../helper_components/styled_select';
import { TagButton } from '../../helper_components/tag_button';

const IndexFilter = (props) => {
    let filterButtons = props.filterButtons.map((buttonDetails, idx) => {
        let filterType = buttonDetails[0];
        let filterText = buttonDetails[1];
        return <TagButton key={idx} tag={filterText} onClick={props.onClearSelection(filterType)}/>
    });
    return ( 
        <div className="index-filter">
            <StyledSelect>
                <option>Any Date</option>
            </StyledSelect>
            {filterButtons}
            <button className="tag-button" onClick={props.onShowFiltersClick}>More filters</button>
        </div>
    );
}
 
export default IndexFilter;