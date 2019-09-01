import React from 'react';
import StyledSelect from '../../helper_components/styled_select';
import { TagButton } from '../../helper_components/tag_button';

const IndexFilter = (props) => {
    let filterButtons = Object.values(props.filters).filter(filter => filter !== '').map(filter => {
        return <TagButton tag={filter} onClick={props.onClearSelection}/>
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