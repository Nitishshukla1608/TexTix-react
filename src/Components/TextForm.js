import React, {useState}from 'react'

export default function TextForm(props) {
  const[text , setText] = useState('');

  const handleUpClick = ()=>{
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to Uppercase","Success")
  }
   
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","Success")
      }

      const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
          }

  const handleOnChnage = (event)=>{
setText(event.target.value)
      }
const handleCopyOnClick = ()=>{
  navigator.clipboard.writeText(text)
  props.showAlert("Copied to clipboard","Success")
}
const handleRemoveSpaceOnClick = () =>{
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText);
  props.showAlert("Extra spaces has been removed","Success")
}
 // text = "enter text here 2"  Wrong way to change the state of text the coorect way to change is steText function....
  return (
 <>
<div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}id="mybox" rows="8"></textarea>
  </div>
<button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lowercasecase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleCopyOnClick}>Copy Text</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleRemoveSpaceOnClick}>Assemble Text</button>
</div>

<div className="conatiner my-3" style={{color:props.mode==="dark"?"white":"black"}}>
  <h4>Your text summary</h4>
  <p>{text.split(" ").length} words,{text.length} characters</p>
  <p>{text.split(" ").length*0.08} Minutes to read</p>
  <h4>Preview</h4>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</>
  )
}
