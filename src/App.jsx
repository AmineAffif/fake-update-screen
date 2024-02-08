import React, { useState, useEffect } from 'react';
import './App.css';
import AppleLogo from './Apple_logo_white.png';
import ProgressBar from './Components/Progressbar';

function App() {
  const [progress, setProgress] = useState(0);
  const [packageNumber, setPackageNumber] = useState(37465); // Commence avec 37465
  const [messageVisible, setMessageVisible] = useState(false); // Nouvel état pour la visibilité

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(oldProgress => oldProgress + 1);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      // Afficher le message et réinitialiser pour le prochain cycle
      setMessageVisible(true); // Rend le message visible
      setPackageNumber(generateRandomNumber()); // Incrémente le numéro du package
      setProgress(0); // Réinitialise la progression
    }
  }, [progress, packageNumber]); // Ajoutez packageNumber aux dépendances si son changement doit déclencher l'effet  

  return (
    <div className="App">
      <img src={AppleLogo} alt="" className="apple_logo" />
      <ProgressBar progress={progress} message={`Updating package apple.inc.${packageNumber}xf`} messageVisible={messageVisible} />
    </div>
  );
}

export default App;

function generateRandomNumber() {
  // Générer un nombre entre 10000000 (inclus) et 99999999 (inclus)
  return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
}
