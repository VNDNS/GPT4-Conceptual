import React from 'react';
import Scene from './components/Scene';
import SignalVisualizer from './components/SignalVisualizer';
import ControlPanel from './components/ControlPanel';
import { scene } from './scenes/scene';
// import { scene } from './scenes/scene2';
import './styles/main.scss';
import Plot from './components/Plot/Plot';
import {PlotClass} from './animation/Plot';
import { config } from './components/Plot/config';
import useCurrentFrame from './hooks/useCurrentFrame';


const plot = new PlotClass(config)

plot.domain.right.setValue(0, 28,180)
plot.domain.left.setValue(0, 20,180)
// plot.dimensions.width.setValues(.1)
// plot.dimensions.width.setValue(0, 600,60)

const propsArray = plot.getProps()




const App = () => {

  const {currentFrame} = useCurrentFrame()

  const props = propsArray[currentFrame]

  return (
    <div className='container'>
      <Scene>
        <Plot props={props}/>
      </Scene>
      <ControlPanel />

      {/* <SignalVisualizer signals={[plot.domain.right]} /> */}
    </div>
  );
};

export default App;

