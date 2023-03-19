import React from 'react';
import useCurrentFrame from '../hooks/useCurrentFrame';
import CurrentFrameLine from './SignalVisualizer/CurrentFrameLine';
import CurrentValueCircles from './SignalVisualizer/CurrentValueCircles';
import SignalLines from './SignalVisualizer/SignalLines';
import { getPlotData } from './SignalVisualizer/utils';

const SignalVisualizer = ({ signals }) => {
  const width = 1100;
  const height = 180;
  const padding = 10;

  const plotOptions = {width, height, padding}
  const {currentFrame} = useCurrentFrame();
  const plotData = getPlotData(signals, plotOptions)
  const currentFrameX = plotData[0][currentFrame].x;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <div className='signal-visualizer'>
      <svg width={width} height={height} viewBox={viewBox}>
      <SignalLines plotData={plotData} />
      <CurrentFrameLine currentFrameX={currentFrameX} height={height} />
      <CurrentValueCircles plotData={plotData} currentFrame={currentFrame} />
    </svg>
  </div>
);
};

export default SignalVisualizer;