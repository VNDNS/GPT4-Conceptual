// src/animation/PolyLineAnimation.js
import Signal2D from "../animation/Signal2D";

const point1 = new Signal2D(200);
const point2 = new Signal2D(200);
const point3 = new Signal2D(200);

const p1 = { x: 100, y: 100 };
const p2 = { x: 300, y: 100 };
const p3 = { x: 200, y: 300 };

point1.setValue(0, p1);
point2.setValue(0, p2);
point3.setValue(0, p3);

point1.setValue(90, { x: 100, y: 200 });
point2.setValue(110, { x: 400, y: 300 });
point3.setValue(140, { x: 200, y: 300 });

export const scene = {
  points: [point1, point2, point3],
};
