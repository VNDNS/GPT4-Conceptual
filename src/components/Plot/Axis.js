import React from 'react';
import useCurrentFrame from '../../hooks/useCurrentFrame';
import Signal2D from '../../animation/Signal2D'
import { Ticks } from './Ticks';

const Axis = ({ props }) => {

  const points = props.line
  const style = props.styles.line
  

  return (
    <g>
      <line {...points} style={style} />
      <Ticks props={props}/>
    </g>
  );
};

export default Axis;

