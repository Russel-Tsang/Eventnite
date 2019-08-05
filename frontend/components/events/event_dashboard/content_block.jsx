import React from 'react';

const ContentBlock = (props) => {
    return (  
        <div className="content-block">
            <span><img className="content-block-image" src={props.imgSrc}/> <h1>{props.heading}</h1></span>
            <p>{props.caption}</p>
            {props.children}
        </div>
    );
}
 
export default ContentBlock;