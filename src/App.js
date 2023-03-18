// src/App.js
import React from 'react';
import Scene from './components/Scene';
import GlobalProvider from './contexts/GlobalProvider';
import Signal from './animation/Signal';
import Signal2D from './animation/Signal2D';
import SignalVisualizer from './components/SignalVisualizer';
import './styles/main.scss';
import ControlPanel from './components/ControlPanel';
import Circle from './shapes/Circle';
import useCurrentFrame from './hooks/useCurrentFrame';

const App = () => {

  const {currentFrame: t} = useCurrentFrame();

  const x = new Signal(200)
  const point = new Signal2D(200)

  const p1 = {x: 100,y:100}
  const p2 = {x: 200,y:100}
  const p3 = {x: 300,y:300}
  const p4 = {x: 200,y:500}

  point.setValue(30,p1)
  point.setValue(80,p2)
  point.setValue(130,p3)
  point.setValue(170,p4)
  
  return (
    <div className='container'>
        <Scene>
          <Circle cx={point.x.getValue(t)} cy={point.y.getValue(t)} r={23} fill='gray' />
        </Scene>
        <ControlPanel />
        <SignalVisualizer signals={[point.x, point.y]}/>
    </div>
  );
};

export default App;
