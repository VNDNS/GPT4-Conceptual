import React from 'react';

const calculateAxisPoints = (config) => {
  const { width, height, paddings } = config;
  const start = { x: paddings.left, y: height - paddings.bottom };
  const end = { x: width - paddings.right, y: height - paddings.bottom };
  return { start, end };
};

const calculateTickPositions = (config) => {
  const { width, height, paddings, horizontal } = config;
  const axisLength = width - paddings.left - paddings.right;
  const tickInterval = axisLength / (horizontal.labels.length - 1);
  const tickPositions = Array.from({ length: horizontal.labels.length }, (_, i) => {
    return {
      x: paddings.left + i * tickInterval,
      y: height - paddings.bottom,
    };
  });
  return tickPositions;
};

const drawTicks = (tickPositions, config) => {
  const { tickSize, tickStyle } = config;
  return tickPositions.map((tickPosition, index) => (
    <line
      key={index}
      x1={tickPosition.x}
      y1={tickPosition.y}
      x2={tickPosition.x}
      y2={tickPosition.y - tickSize}
      style={tickStyle}
    />
  ));
};

const drawLabels = (tickPositions, config) => {
  const { tickSize, labelStyle, horizontal } = config;
  return tickPositions.map((tickPosition, index) => (
    <text
      key={index}
      x={tickPosition.x}
      y={tickPosition.y - tickSize - 5}
      textAnchor="middle"
      dominantBaseline="baseline"
      style={labelStyle}
    >
      {horizontal.labels[index]}
    </text>
  ));
};

const HorizontalAxis = ({ config }) => {
  const axisPoints = calculateAxisPoints(config);
  const tickPositions = calculateTickPositions(config);

  const lineProps = {
    x1: axisPoints.start.x,
    y1: axisPoints.start.y,
    x2: axisPoints.end.x,
    y2: axisPoints.end.y,
    style: config.axisStyle,
  };
  
  return (
    <g>
      <line {...lineProps} />
      {drawTicks(tickPositions, config)}
      {drawLabels(tickPositions, config)}
    </g>
  );
};

export default HorizontalAxis;

