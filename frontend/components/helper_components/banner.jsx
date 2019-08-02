import React from 'react';

const Banner = (props) => {
    return ( 
        <div className="banner" 
            style={{ 
                backgroundImage: `url(${props.backgroundImage})`,
                width: '100%',
                height: 500
            }}
        />
     );
}
 
export default Banner;