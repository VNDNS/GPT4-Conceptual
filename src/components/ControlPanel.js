import React from 'react';

const ControlPanel = ({ onPlay, onPause, onReset }) => {
  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ControlPanel;
