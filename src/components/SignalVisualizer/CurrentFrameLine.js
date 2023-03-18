import React from 'react';

const CurrentFrameLine = ({ currentFrameX, height }) => (
  <line x1={currentFrameX} y1="0" x2={currentFrameX} y2={height} stroke="blue" strokeWidth="2" />
);

export default CurrentFrameLine;
