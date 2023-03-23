import React from 'react';
import useCurrentFrame from '../../hooks/useCurrentFrame';
import Signal2D from '../../animation/Signal2D'
import { Ticks } from './Ticks';

const Axis = ({ props }) => {

  return (
    <g>
      {/* <Line {...line} /> */}
      <Ticks props={props}/>
    </g>
  );
};

export default Axis;

