import React from "react";
import useCurrentFrame from "../hooks/useCurrentFrame";

const Line = ({ point1, point2, strokeWidth = 2, stroke = "black" }) => {

  const {currentFrame: t} = useCurrentFrame()

  const { x: x1, y: y1 } = point1.getValue(t);
  const { x: x2, y: y2 } = point2.getValue(t);

  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke={stroke} />
  );
};

export default Line;

