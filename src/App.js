import React from 'react';
import Scene from './components/Scene';
import SignalVisualizer from './components/SignalVisualizer';
import ControlPanel from './components/ControlPanel';
import './styles/main.scss';
import Plot from './components/Plot/Plot';
import {PlotClass} from './animation/Plot';
import { config } from './components/Plot/config';
import useCurrentFrame from './hooks/useCurrentFrame';
import Signal from './animation/Signal';


const a = new Signal(0);
const b= new Signal(2);

b.connect((i) => 2*a.get(i))

a.set(2,60)
// b.set(3,30)



const App = () => {

  const {currentFrame} = useCurrentFrame()


  return (
    <div className='container'>
      <Scene>
      </Scene>
      <ControlPanel />

      <SignalVisualizer signals={[a.get(), b.get()]} />
    </div>
  );
};

export default App;

