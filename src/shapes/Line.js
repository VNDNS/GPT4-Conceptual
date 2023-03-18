import React from "react";

const Line = ({ x1, y1, x2, y2, strokeWidth = 1, stroke = "black" }) => {
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth} stroke={stroke} />
  );
};

export default Line;
