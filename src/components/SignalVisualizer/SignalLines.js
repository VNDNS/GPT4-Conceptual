import React from 'react';
import { getColor } from './utils';

const SignalLines = ({ plotData }) => (
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
