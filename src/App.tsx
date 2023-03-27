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
import Signal2D from './animation/Signal2D';
import { Point } from './types';
import { Circle } from './animation/Circle';
import { CircleComponent } from './components/Circle';
import { Line } from './animation/Line';
import Signals from './animation/Signals';
import Signals2D from './animation/Signals2D';
import Circles from './animation/Circles';

function separateCoordinates(points: Point[]): [number[], number[]] {
  const xCoordinates: number[] = [];
  const yCoordinates: number[] = [];

  points.forEach(point => {
    xCoordinates.push(point.x);
    yCoordinates.push(point.y);
  });

  return [xCoordinates, yCoordinates];
}



function linspace2D(start: Point, end: Point, n: number): Point[] {
  if (n <= 1) {
    throw new Error("n must be greater than 1");
  }

  const points: Point[] = [];
  const deltaX = (end.x - start.x) / (n - 1);
  const deltaY = (end.y - start.y) / (n - 1);

  for (let i = 0; i < n; i++) {
    const x = start.x + i * deltaX;
    const y = start.y + i * deltaY;
    points.push({ x, y });
  }

  return points;
}


function linspaceArray(maxValue: number) {
  const maxInt = Math.floor(maxValue);
  const result = [];

  for (let i = 1; i <= maxInt; i++) {
    result.push(i);
  }

  return result;
}


function generateRandomPoints(xMax: number, yMax: number, n: number): Point[] {
  const points: Point[] = [];

  for (let i = 0; i < n; i++) {
    const x = Math.random() * xMax;
    const y = Math.random() * yMax;
    points.push({ x, y });
  }

  return points;
}

const p1 = {x:100, y:300}
const p2 = {x:1000, y:300}

const p3 = {x:100, y:500}
const p4 = {x:100, y:50}


const n = 10

const positions = linspace2D(p1, p2, n)
const positions2 = linspace2D(p3, p4, n)
const radii = Array(n).fill(n)

const circleProps = {positions, radii}

const circles = new Circles(circleProps)

circles.setPositions(positions2, 60)


const App = () => {

  const {currentFrame} = useCurrentFrame()

  return (
    <div className='container'>
      <Scene>
        {circles.getComponents(currentFrame)}
      </Scene>
      <ControlPanel />

      {/* <SignalVisualizer signals={separateCoordinates(circle.position.getArray())} /> */}
    </div>
  );
};

export default App;

