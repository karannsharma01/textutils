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
    const [text, setText] = useState("");
    // setText("fchjkl/hg");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ Color: props.mode === 'dark' ? 'white' : 'black' }} className='mb-2' >{props.heading} </h1>
                <div className="mb-3 my-3">
                    <label htmlFor="mybox" className="form-label">Text</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#3e2872' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled ={text.length===0} className="btn btn-primary mx- 2 my-1 " style={{ backgroundColor: '#3bd407', color: 'white', border: '2px solid white' }}
                    onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx- 2 my-1" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled ={text.length===0} className="btn btn-primary mx- 2 my-1" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleClear}>Clear text</button>
                <button disabled ={text.length===0} className="btn btn-primary mx- 2 my-1" style={{ backgroundColor: '#3bd407', border: '2px solid white', color: 'white' }} onClick={handleCopy}> Copy text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Previews</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}
