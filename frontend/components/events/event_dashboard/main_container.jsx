import React from 'react';

const MainContainer = (props) => {
    return (  
        <div className="main-container">
            {props.children}
        </div>
    );
}
 
export default MainContainer;