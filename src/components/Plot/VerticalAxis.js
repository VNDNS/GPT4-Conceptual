import React from 'react';

const calculateAxisPoints = (config) => {
  const { height, paddings } = config;
  const start = { x: paddings.left, y: height - paddings.bottom };
  const end = { x: paddings.left, y: paddings.top };
  return { start, end };
};

const calculateTickPositions = (config) => {
  const { height, paddings, vertical } = config;
  const axisLength = height - paddings.top - paddings.bottom;
  const tickInterval = axisLength / (vertical.labels.length - 1);
  const tickPositions = Array.from({ length: vertical.labels.length }, (_, i) => {
    return {
      x: paddings.left,
      y: height - paddings.bottom - i * tickInterval,
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
      x2={tickPosition.x + tickSize}
      y2={tickPosition.y}
      style={tickStyle}
    />
  ));
};

const drawLabels = (tickPositions, config) => {
  const { tickSize, labelStyle, vertical } = config;
  return tickPositions.map((tickPosition, index) => (
    <text
      key={index}
      x={tickPosition.x - tickSize - 5}
      y={tickPosition.y}
      textAnchor="end"
      dominantBaseline="middle"
      style={labelStyle}
    >
      {vertical.labels[index]}
    </text>
  ));
};

const VerticalAxis = ({ config }) => {
  const axisPoints = calculateAxisPoints(config);
  const tickPositions = calculateTickPositions(config);

  return (
    <g>
      <line
        x1={axisPoints.start.x}
        y1={axisPoints.start.y}
        x2={axisPoints.end.x}
        y2={axisPoints.end.y}
        style={config.axisStyle}
      />
      {drawTicks(tickPositions, config)}
      {drawLabels(tickPositions, config)}
    </g>
  );
};

export default VerticalAxis;
