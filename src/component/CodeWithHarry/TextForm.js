import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercases was clicked: " + text)
        let newText = text.toUpperCase();
        // setText("clicked on HangleUpClick")
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCapitalize = () => {
        let newText = text.capatalize();
        setText(newText)
    }
    const handleAlternate = () => {
        let newText = text.alternate()
        setText(newText)
    }
    // Remove Extra spaces more then 2 and join one space
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleInverse = () => {
        let newText = text.reverse()
        setText(newText)
    }
    const handleDownload = () => {
        let newText = text.download()
        setText(newText)
    }
    const handleCopy = () => {
        let text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleClear = () => {
        let newText = ' '
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)  // now type on text area 
    }
    const [text, setText] = useState('Enter text here')
    //text = "text here " // Wrong wat to change the state
    //setText("new text"); // Correct way to change state but not work now
    return (
        <>
            <div className="container" style={{ color: props.mode === 'blue' ? 'black' : 'red' }}>
                <div>
                    <h1>{props.heading}</h1>
                    {/* <label htmlFor="mybox">{props.heading}</label> */}
                    <textarea name="" value={text} id="mybox" style={{ backgroundColor: props.mode === 'silver' ? 'gray' : 'pink', color: props.mode === 'red' ? 'white' : 'green' }} onChange={handleOnChange} cols="50" rows="7"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" onClick={handleAlternate}>aLtErNaTiNg cAsE</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleInverse}>InVersE CaSe</button>
                <button className="btn btn-primary mx-1" onClick={handleDownload}>Download Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'blue' ? 'red' : 'blue' }}>
                <h2>Preview Text</h2>
                <p>{text.length > 0 ? text : "Enter something in the above textbox"}</p>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} No of words </p>

                <p>{text.length} No of characters (including spaces) </p>
                <p>{text.length} No of Line </p>

                <p>{text.length} No of characters (without spaces) </p>
                <p>{text.split('').length} No of Paragraphs </p>
                <p>{text.length} No of Sentences </p>
                <p>{text.length} No of Character (a-z) </p>
                <p>{.008 * text.split(" ").length} Minutes Read </p>
                <h2>Readability</h2>
                <p>hard words</p>
                <p>Long words</p>
                <p>Lexical density {text.trimStart}</p>

                <p>TEXT ANYLIZER AND WORD COUNTER</p>
            </div>
        </>
    )
}
