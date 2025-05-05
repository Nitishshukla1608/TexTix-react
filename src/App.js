import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { useState } from "react";
import {
  BrowserRouter as Router, 
  Routes,
 Route ,
Link
} from 'react-router-dom';



function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1900);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has beed enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beed enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextTix"
        aboutUs="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} /> 
       <Routes>
          <Route path="/about" element={<About  mode={mode}/>} />
          <Route
            path="/textform"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Try TexTix- Word counter,character counter,Remove extra spaces"
                mode={mode}
              />
            }
          />
        </Routes>
         
      </div>
    </Router>
    </>
  );
}

export default App;