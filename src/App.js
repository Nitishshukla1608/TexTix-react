
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';

function App() {
const [mode, setMode] = useState("light") // whether dark mode is enabled or not 
const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
  }
}
  return (
  <>
 {/* ham yahan pe navbar ko import kar rahe hain components se  */}
<Navbar title="TextTix"  aboutUs="About" mode={mode} toggleMode={toggleMode}/>
<div className="container my-3">
  <TextForm heading="Enter the text to convert" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
