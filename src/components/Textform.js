// for react function based comonents use (rfc)
// here we are using useState which helps us to create a state variable 
import React, { useState } from 'react';
import Footer from './Footer';

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');  // here text is a state variable and setText is function to change the state variable ,, here default value of text(state variable) is 'Enter text here';
    const upperFun = () => {
        if (text.length > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("success", "Text has been convertd to Uppercase");
        } else
            props.showAlert("warning", "Please enter text");
    }
    const loweCaseFun = () => {
        if (text.length > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("success", "Text has been convertd to Lowercase");
        } else
            props.showAlert("warning", "Please enter text");
    }
    const clearFun = () => {
        if (text.length > 0) {
            props.showAlert("danger", "Text has been convertd to Lowercase");
            setText('');
        } else {
            props.showAlert("warning", "Please enter text");
        }
    }
    const trimfun = () => {
        if (text.length > 0) {
            let newtext = text.replace(/\s+/g, ' ').trim();
            setText(newtext);
            props.showAlert('success', "Text has been trimed successfully");
        } else {
            props.showAlert('warning', "Please enter text to analyze")
        }
    }
    const onchangeFun = (event) => {
        setText(event.target.value);
    }    
    return (
        <>
            <div className="container textutils">
            <h1>Enter the text to analyze below</h1>
                <div className="mb-3">
                
                    <textarea value={text} onChange={onchangeFun} style={{ backgroundColor: props.mode === 'secondary' ? 'white' : 'rgb(30 28 82)', color: props.mode === 'secondary' ? 'black' : 'white', border:'2px solid' }} className="form-control mb-3" id="myBox" rows="8"></textarea>
                    <button type="button" onClick={upperFun} className="btn btn-primary mx-1 my-2">Convert To Uppercase</button>
                    <button type="button" onClick={loweCaseFun} className="btn btn-primary mx-1 my-2">Convert To Lowercase</button>
                    <button type="button" onClick={clearFun} className="btn btn-primary mx-1 my-2">Clear</button>
                    <button type="button" onClick={trimfun} className="btn btn-primary mx-1 my-2">Remove Extra Spaces</button>

                    <div className="container mt-4">
                        <h2>Your Text Summary</h2>
                        <p><b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> words and <b>{text.length}</b> characters</p>
                        <p><b>{0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)}</b> Minutes to read</p>
                        <h2>Preview</h2>
                        <p>{text.length > 0 ? text : 'Enter something in Box to preview here'}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
