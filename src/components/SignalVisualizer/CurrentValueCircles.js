import React from 'react';

const CurrentValueCircles = ({ plotData, currentFrame }) => (
  plotData.map((points, index) => {
    const currentPoint = points[currentFrame];
    return (
      <circle
        key={`circle-${index}`}
        cx={currentPoint.x}
        cy={currentPoint.y}
        r="4"
        fill='yellow'
        stroke="black"
      />
    );
  })
);

export default CurrentValueCircles;
