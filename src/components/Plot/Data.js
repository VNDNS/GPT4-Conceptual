import React from 'react';

const Data = ({ props }) => {
  const points = props.points
  const style = props.styles.line
  
  return (
    <g>
      <polyline points={points} style={style} />
    </g>
  );
};

export default Data;
