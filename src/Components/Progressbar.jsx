import React from "react";

const ProgressBar = ({ progress, message, messageVisible }) => {
  return (
    <>
      <div className="progress-bar-outer">
        <div
          className="progress-bar-inner"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      {/* Utilisez messageVisible pour contrôler l'affichage du message */}
      <p className="update_msg" style={{ visibility: messageVisible ? 'visible' : 'hidden' }}>
        {message}
      </p>
    </>
  );
};

export default ProgressBar;
