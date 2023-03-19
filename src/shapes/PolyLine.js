// src/shapes/PolyLine.js
import React from "react";
import useCurrentFrame from "../hooks/useCurrentFrame";

const PolyLine = ({ points, strokeWidth = 2, stroke = "black", fill = "none" }) => {
  const { currentFrame: t } = useCurrentFrame();

  const pathData = points
    .map((point) => {
      const { x, y } = point.getValue(t);
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <polyline
      points={pathData}
      strokeWidth={strokeWidth}
      stroke={stroke}
      fill={fill}
    />
  );
};

export default PolyLine;
