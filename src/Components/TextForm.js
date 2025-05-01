import React, {useState}from 'react'



export default function TextForm(props) {
  const[text , setText] = useState('');

  const handleUpClick = ()=>{
let newText = text.toUpperCase();
setText(newText)
  }
   
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
      }

      const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
          }

  const handleOnChnage = (event)=>{
setText(event.target.value)
      }

 // tetx = "enter text here 2"  Wrong way to change the state of text the coorect way to change is steText function....
  return (
 <>
<div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control"  value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode==="dark"?"grey":"light",color:props.mode==="dark"?"white":"black"}}id="mybox" rows="8"></textarea>
  </div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercasecase</button>
<button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
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
