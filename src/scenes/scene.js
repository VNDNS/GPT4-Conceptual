import Signal2D from "../animation/Signal2D";

const point1 = new Signal2D(200);
const point2 = new Signal2D(200);

const p1 = { x: 400, y: 400 };
const p3 = { x: 200, y: 400 };
const p4 = { x: 600, y: 400 };

point1.setValue(0, p1);
point2.setValue(0, p1);
point1.setValue(60, p3);
point2.setValue(60, p4);

export const scene = {
  point1,
  point2,
}
