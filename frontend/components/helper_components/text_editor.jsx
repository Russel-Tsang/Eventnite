import React from 'react';

const TextEditor = (props) => {
    return (  
        <textarea className="text-editor" value={props.value} onChange={props.onChange} />
    );
}
 
export default TextEditor;