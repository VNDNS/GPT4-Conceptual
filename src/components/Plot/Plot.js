import React from 'react';
import Group from '../Group';
import Axis from './Axis';

const Plot = ({ props }) => {

  const position = props.position
  const horizontal = props.axes.horizontal
  const vertical = props.axes.vertical

  return (
    <Group position={position}>
      <Axis props={horizontal} />
      <Axis props={vertical} />
    </Group>
  );
};

export default Plot;
