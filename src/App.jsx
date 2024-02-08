import React, { useState, useEffect } from 'react';
import './App.css';
import AppleLogo from './Apple_logo_white.png';
import ProgressBar from './Components/Progressbar';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="App">
      <img src={AppleLogo} alt="" className="apple_logo" />
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
