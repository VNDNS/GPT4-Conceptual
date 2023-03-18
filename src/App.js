// src/App.js
import React from 'react';
import SceneManager from './scene/SceneManager';
import AnimationControlProvider from './contexts/AnimationControlProvider';
import Signal from './animation/Signal';
import SignalVisualizer from './components/SignalVisualizer';
import './styles/main.scss';


const App = () => {

  const x = new Signal(200)
  x.setValue(60, 130, 0, 1, 'ease')
  return (
    <div className='container'>
      
      <AnimationControlProvider>
        <SceneManager />
        <SignalVisualizer signal={x} width={1100} height={200}/>
      </AnimationControlProvider>
    </div>
  );
};

export default App;
