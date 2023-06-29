// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
  // Link
} from "react-router-dom"
// import { Switch } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      // console.log(mode)
      document.body.style.backgroundColor = '#1d6544';
      showalert("Success", "Dark mode activated!!")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Success", "Light mode activated!!")
    }
  }
  return (

    <Router>
      <Navbar title="textutil" textabout="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-5'>
      <Routes>
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/" element={<div className="container"><TextForm text="Text converter" mode={mode} alert={alert} showalert={showalert} /></div>} />
      </Routes>
      </div>

    </Router>
    // {/* // -->jsx */}

  );
}

export default App;
