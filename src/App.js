
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';

function App() {
const [mode, setMode] = useState("light") // whether dark mode is enabled or not 
const [alert, setAlert] = useState(null)

const showAlert= (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("Dark mode has beed enabled","success");
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Light mode has beed enabled","success");
  }
}
  return (
  <>
 {/* ham yahan pe navbar ko import kar rahe hain components se  */}
<Navbar title="TextTix"  aboutUs="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <TextForm showAlert={showAlert}heading="Enter the text to convert" mode={mode}/>
  {/* <About/> */}
  </div>
</>
  );
}

export default App;
