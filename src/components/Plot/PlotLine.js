import React from 'react';

const processData = (config) => {
  const { data, horizontal, vertical, width, height, paddings } = config;

  const xScale = (value) => {
    const xRange = width - paddings.left - paddings.right;
    const xDomain = horizontal.domain;
    return paddings.left + (value - xDomain[0]) * (xRange / (xDomain[1] - xDomain[0]));
  };

  const yScale = (value) => {
    const yRange = height - paddings.top - paddings.bottom;
    const yDomain = vertical.domain;
    return height - paddings.bottom - (value - yDomain[0]) * (yRange / (yDomain[1] - yDomain[0]));
  };

  const processedData = data.map((point) => ({
    x: xScale(point.x),
    y: yScale(point.y),
  }));

  return processedData;
};

const drawPlotLine = (processedData, config) => {
  const { lineStyle } = config;

  const points = processedData.map((point) => `${point.x},${point.y}`).join(' ');

  return (
    <polyline points={points} style={lineStyle} />
  );
};


const PlotLine = ({ config }) => {
  const processedData = processData(config);
  
  return (
    <g>
      {drawPlotLine(processedData, config)}
    </g>
  );
};

export default PlotLine;
