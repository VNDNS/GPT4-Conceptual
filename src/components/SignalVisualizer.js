// src/components/SignalVisualizer.js
import useCurrentFrame from '../hooks/useCurrentFrame';

import React from 'react';

const SignalVisualizer = ({ signal, width, height }) => {


  const currentFrame = useCurrentFrame();
  const currentFrameX = (currentFrame / signal.values.length) * width;
  const currentFrameY = height - signal.values[currentFrame] * height;


  const viewBox = `0 ${width} ${height}`;

  // Convert signal values to SVG path data
  const pathData = signal.values
    .map((value, frame) => {
      const x = (frame / signal.values.length) * width;
      const y = (height - value * height);
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div style={{ padding: '10px' , border: 'solid black 1px'}}>
      <h3>Signal</h3>
      <svg width={width} height={height} viewBox={viewBox} >
        <polyline points={pathData} fill="none" stroke="red" strokeWidth="2" />
        <line x1={currentFrameX} y1="0" x2={currentFrameX} y2={height} stroke="blue" strokeWidth="1" />
        <circle cx={currentFrameX} cy={currentFrameY} r="4" fill="yellow" stroke='black'/>
      </svg>
    </div>
  );
};

export default SignalVisualizer;
