import React from 'react';

const SignalLines = ({ plotData, getColor }) => (
  plotData.map((points, index) => {
    const pathData = points.map((point) => `${point.x},${point.y}`).join(' ');
    return (
      <polyline
        key={`signal-${index}`}
        points={pathData}
        fill="none"
        stroke={getColor(index)}
        strokeWidth="2"
      />
    );
  })
);

export default SignalLines;
