import React, { useState } from 'react'

export default function TextForm(props) {
    const [itext,setText]=useState("Enter text here");

    const handleUpClick=()=>{
        
        setText(itext.toUpperCase());
        props.showalert("Success","All characters are converted to upperCase")
    }
    const handleDownClick=()=>{
        
        setText(itext.toLowerCase());
        props.showalert("Success","All characters are converted to lowerCase")
    }
    const handleclearClick=()=>{
        
        setText("")
        props.showalert("Success","All text cleared")
    }
    const handleremsClick=()=>{
        let ntext=itext.split(/[ ]+/)

        setText(ntext.join(" "))
        props.showalert("Success","All extra spaces cleared")
    }
    const handlecopyClick=()=>{
    
        navigator.clipboard.writeText(itext)

        props.showalert("Success","Text copied")
        

        
    }
    const textChange=(event)=>{
        // console.log("Onchange")
        setText(event.target.value)
    }

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode==='light'?'black':'white',fontSize:50}}>{props.text}</label>
                <textarea className="form-control" id="mybox" rows="8" value={itext} onChange={textChange} style={{ backgroundColor:props.mode==='light'?'white':'#1d6544',color:props.mode==='light'?'#1d6544':'white'}}></textarea>
            </div>
            <button className="btn btn-primary"  onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3"  onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3"  onClick={handleclearClick}>Clear text</button>
            <button className="btn btn-primary mx-3"  onClick={handleremsClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-3"  onClick={handlecopyClick}>Copy Text</button>
        </div>
        <div className='length my-3 mx-3' style={{color:props.mode==='light'?'black':'white'}}>
            words:{itext.split(/\s/).filter((element)=>{return element.length!==0}).length} characters:{itext.length}
        </div>
        <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
        <p style={{color:props.mode==='light'?'black':'white'}}>{itext}</p>

        </>
    )
}
