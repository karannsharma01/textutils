import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase",'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase",'success');
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared!",'success');
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied",'success');
    }
    const [text, setText] = useState("Enter text here");
    // setText("fchjkl/hg");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ Color: props.mode === 'dark' ? 'white' : 'black' }} >{props.heading} </h1>
                <div className="mb-3 my-3">
                    <label htmlFor="mybox" className="form-label">Text</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 " style={{ backgroundColor: '#3bd407', color: 'white', border: '2px solid white' }}
                    onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleClear}>Clear text</button>
                <button className="btn btn-primary mx-2" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleCopy}> Copy text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text in the textbox to preview it here"}</p>
            </div>
        </>
    )
}
