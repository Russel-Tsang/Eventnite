import React from 'react';

const TextEditor = (props) => {
    return (  
        <section className="text-editor">
            <header>
                <span className="editor-left" onClick={props.onClick}>T</span>
                <span className="editor-right">
                    <span onClick={props.onClick}>B</span>
                    <span onClick={props.onClick}>I</span>
                </span>
            </header>
            <textarea value={props.value} onChange={props.onChange} />
        </section>
    );
}
 
export default TextEditor;