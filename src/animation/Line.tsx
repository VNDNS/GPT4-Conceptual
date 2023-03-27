import Signal2D from "./Signal2D";
import { Point } from "../types";
import React from "react";

interface LineProps {
  p1: Point;
  p2: Point;
}

class Line {
  p1: Signal2D;
  p2: Signal2D;
  propsArray: LineProps[];

  constructor(p1: Point, p2: Point) {
    this.p1 = new Signal2D(p1);
    this.p2 = new Signal2D(p2);
    this.propsArray = [];
  }

  initProps() {
    const propsArray = [];

    for (let i = 0; i < this.p1.getArray().length; i++) {
      const point1 = this.p1.get(i);
      const point2 = this.p2.get(i);
      propsArray.push({ p1: point1, p2: point2 });
    }
    this.propsArray = propsArray;
  }

  center(frame: number): Point {
    const p1 = this.p1.get(frame);
    const p2 = this.p2.get(frame);
  
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2
    };
  }

  getPointOnLine(frame: number, t: number): Point {
    const p1 = this.p1.get(frame);
    const p2 = this.p2.get(frame);
  
    return {
      x: p1.x + (p2.x - p1.x) * t,
      y: p1.y + (p2.y - p1.y) * t
    };
  }
  
  

  getComponent(i: number) {
    const props = this.propsArray[i];

    const component: React.FC<LineProps> = (props) => {
      const { p1, p2 } = props;
      return (
        <>
          <line
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="coral"
            strokeWidth="2"
          />
        </>
      );
    };

    return component(props);
  }
}

export { Line };
