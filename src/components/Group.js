import React from 'react';

function getTranslateString(point) {
  return `translate(${point.x}px, ${point.y}px)`;
}

const Group = ({ position, children }) => {

  const positionString = getTranslateString(position)

  return (
    <g style={{transform: positionString}}>
      {children}
    </g>
  )
}

export default Group;