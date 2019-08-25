import React from 'react';
import StyledSelect from '../../helper_components/styled_select';

const FiltersAside = (props) => {
    let showAside = props.showAside ? 'filters-aside-show' : '';
    return ( 
        <aside className={`filters-aside ${showAside}`}>
            <header className="filters-aside-header">
                <h2>More filters</h2>
            </header>
            <main className="filters-aside-main">
                <StyledSelect>
                    <option>Any category</option>
                </StyledSelect>
                <StyledSelect>
                    <option>Any event type</option>
                </StyledSelect>
                <StyledSelect>
                    <option>Any price</option>
                </StyledSelect>
                <div className="filters-aside-buttons">
                    <div className="button-1" onClick={props.onCloseClick}>
                        Close
                    </div>
                    <div className="button-1">
                        Apply
                    </div>
                </div>
            </main>
        </aside>
    );
}
 
export default FiltersAside;