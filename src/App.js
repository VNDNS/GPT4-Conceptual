// src/App.js
import React from 'react';
import SceneManager from './scene/SceneManager';
import AnimationControlProvider from './contexts/AnimationControlProvider';
import Signal from './animation/Signal';
import SignalVisualizer from './components/SignalVisualizer';

const App = () => {

  const x = new Signal(200)
  x.setValue(60, 130, 0, 1, 'ease')
  return (
    <>
      <AnimationControlProvider>
        <SceneManager />
        <SignalVisualizer signal={x} width={800} height={200} />
      </AnimationControlProvider>
    </>
  );
};

export default App;
