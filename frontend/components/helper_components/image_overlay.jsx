import React from 'react';

const ImageOverlay = (props) => {
    let showOverlayImage = props.showOverlayImage ? '' : 'display-none';
    return ( 
        <div className="details-image-overlay" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            <img src={window.garbageCanIcon} className={showOverlayImage} onClick={props.onIconClick}/>
        </div>
    );
}
 
export default ImageOverlay;