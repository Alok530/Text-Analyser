import './App.css';

import Navbar from './components/Navbar';
import React, { useState } from 'react'
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('secondary');
  const [text, settext] = useState('Enable Dark Mode');
  const [alert, setalert] = useState(null);
  const showAlert = (alertType, message) => {
    setalert({
      alertMsg: message,
      type: alertType,
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglefun = () => {
    if (mode === 'secondary') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(8 30 56)';
      document.body.style.color = 'white';
      settext('Enable Light Mode');
      showAlert("success", "Dark mode has been enabled");      
    } else {
      setmode('secondary')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      settext('Enable Dark Mode');
      showAlert("success", "Light mode has been enabled");
    }
  }

  return (
    <>
      <Navbar tittle="Text Analyzer" aboutText="About" mode={mode} toggle={togglefun} text={text} />
      <Alert alert={alert} />
      <Textform mode={mode} alert={alert} showAlert={showAlert} />
    </>
  );
}

export default App;
