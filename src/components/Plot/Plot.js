import React from 'react';
import Axis from './Axis';

function getTranslateString(point) {
  return `translate(${point.x}px, ${point.y}px)`;
}


const p = getTranslateString({x:100, y:100})

const Plot = ({ props }) => {
  return (
    <g>
      <Axis props={props} />
      {/* <VerticalAxis props={props} /> */}
      {/* <PlotLine props={props} /> */}
    </g>
  );
};

export default Plot;
