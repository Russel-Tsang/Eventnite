import React from 'react';

const TextEditor = (props) => {
    return (  
        // <section className="text-editor">
            <textarea className="text-editor" value={props.value} onChange={props.onChange} />
        /* </section> */
    );
}
 
export default TextEditor;