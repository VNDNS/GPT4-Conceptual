import React from 'react';
import useCurrentFrame from '../hooks/useCurrentFrame';
import CurrentFrameLine from './SignalVisualizer/CurrentFrameLine';
import CurrentValueCircles from './SignalVisualizer/CurrentValueCircles';
import SignalLines from './SignalVisualizer/SignalLines';
import { getPlotData } from './SignalVisualizer/utils';

const AxisLabels = ({ width, height, padding, maxX, maxY }) => {
  const textStyle = {
    fontSize: "15px",
    textAnchor: "middle",
    fill: "white"
  };

  return (
    <>
      {/* Max value label for X-axis */}
      <text x={width - 20} y={ height - padding - 10} style={textStyle}>
        {maxX}
      </text>
      {/* Max value label for Y-axis */}
      <text
        x={20}
        y={13}
        style={textStyle}
      >
        {maxY}
      </text>
    </>
  );
};


const Axes = ({ width, height, padding }) => {
  return (
    <>
      {/* X-axis */}
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="white"
      />
      {/* Y-axis */}
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="white"
      />
    </>
  );
};


const SignalVisualizer = ({ signals }) => {
  const width = 1100;
  const height = 180;
  const padding = 10;

  const plotOptions = {width, height, padding}
  const {currentFrame} = useCurrentFrame();
  const plotData = getPlotData(signals, plotOptions)
  const currentFrameX = plotData[0][currentFrame].x;
  const viewBox = `0 0 ${width} ${height}`;

  // Calculate the max values for x and y axes
  const maxX = plotData[0].length - 1;
  const maxY = Math.max(...signals.map(signal => Math.max(...signal)));

  return (
    <div className='signal-visualizer'>
      <svg width={width} height={height} viewBox={viewBox}>
      <Axes width={width} height={height} padding={padding} />
      <AxisLabels width={width} height={height} padding={padding} maxX={maxX} maxY={maxY} />
      <SignalLines plotData={plotData} />
      <CurrentFrameLine currentFrameX={currentFrameX} height={height} />
      <CurrentValueCircles plotData={plotData} currentFrame={currentFrame} />
    </svg>
  </div>
);
};

export default SignalVisualizer;