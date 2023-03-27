import React from 'react';

interface CircleProps {
  position: {
    x: number;
    y: number;
  };
  radius: number;
}

interface Props {
  props: CircleProps;
}

const CircleComponent: React.FC<Props> = ({ props }) => {
  const { position, radius } = props;

  return (
    <>
      <circle cx={position.x} cy={position.y} r={radius} fill='coral' />
    </>
  );
};

export { CircleComponent };
