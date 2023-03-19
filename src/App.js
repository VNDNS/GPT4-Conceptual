import React from 'react';
import Scene from './components/Scene';
import SignalVisualizer from './components/SignalVisualizer';
import ControlPanel from './components/ControlPanel';
import Line from './shapes/Line';
import PolyLine from './shapes/PolyLine';
// import { scene } from './scenes/scene';
import { scene } from './scenes/scene2';
import './styles/main.scss';
import Plot from './components/Plot/Plot';

const amplitude = 10;
const frequency = 0.15;
const phase = 0;
const offset = 20;

const data = Array.from({ length: 100 }, (_, index) => ({
  x: index,
  y: Math.sin(index * frequency)*amplitude + offset,
}));


const config = {
  data: data,
  width: 600,
  height: 400,
  paddings: {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50,
  },
  horizontal: {
    labels: ['', '20', '40', '60', '80', '100'],
    domain: [0,100]
  },
  vertical: {
    labels: ['', '25', '50', '75', '100'],
    domain: [0,100]
  },
  tickSize: 10,
  axisStyle: {
    stroke: 'white',
    strokeWidth: 2,
  },
  tickStyle: {
    stroke: 'white',
    strokeWidth: 2,
  },
  lineStyle : {
    stroke: 'white',
    strokeWidth: 2,
    fill: 'none',
  },  
  labelStyle: {
    fontSize: 16,
    fontFamily: 'Arial, sans-serif',
    fill: 'white',
  },
};



const App = () => {


  return (
    <div className='container'>
      <Scene>
        {/* <Line {...scene} stroke="white" /> */}
        {/* <PolyLine {...scene} stroke="white" /> */}
        <Plot config={config}/>
      </Scene>
      <ControlPanel />
      <SignalVisualizer signals={[scene.points[0].x, scene.points[0].y, scene.points[1].x, scene.points[1].y]} />
    </div>
  );
};

export default App;

