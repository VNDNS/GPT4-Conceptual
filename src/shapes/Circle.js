import React from 'react';

const Circle = ({ cx, cy, r, fill, stroke, strokeWidth, onClick }) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      onClick={onClick}
    />
  );
};

export default Circle;
