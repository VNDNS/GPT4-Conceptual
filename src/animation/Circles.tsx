import { Circle } from "./Circle";
import Signals2D from "./Signals2D";
import Signal from "./Signal";
import { Point } from "../types";
import React from "react";
import easingFunctions from "./easingFunctions";
type EasingFunctionKey = keyof typeof easingFunctions;


interface CirclesProps {
  positions: Point[];
  radii: number[];
}

class Circles {
  private circles: Circle[];
  private positionsSignal: Signals2D;
  private radiiSignal: Signal[];

  constructor(props: CirclesProps) {
    const { positions, radii } = props;

    if (positions.length !== radii.length) {
      throw new Error("The number of positions and radii must be equal.");
    }

    this.positionsSignal = new Signals2D(positions);
    this.radiiSignal = radii.map((radius) => new Signal(radius));

    this.circles = positions.map((_, index) => {
      return new Circle(positions[index], radii[index]);
    });


    this.initProps();
  }

  private initProps(): void {
    const positionArrays = this.positionsSignal.getArray();
    const radiusArrays = this.radiiSignal.map((signal) => signal.getArray());

    this.circles.forEach((circle, index) => {
      circle.position.setArray(positionArrays[index]);
      circle.radius.setArray(radiusArrays[index]);
      circle.initProps();
    });
  }

  setPositions(
    newPositions: Point[],
    startFrame: number,
    deltaFrames: number = 60,
    easing: EasingFunctionKey = "ease"
  ): void {
    if (newPositions.length !== this.circles.length) {
      console.error("The number of new positions must match the number of circles.");
      return;
    }

    this.circles.forEach((circle, index) => {
      circle.position.set(newPositions[index], startFrame, deltaFrames, easing);
    });

    this.initProps();
  }

  setRadii(
    newRadii: number[],
    startFrame: number,
    deltaFrames: number = 60,
    easing: EasingFunctionKey = "ease"
  ): void {
    if (newRadii.length !== this.circles.length) {
      console.error("The number of new radii must match the number of circles.");
      return;
    }

    this.circles.forEach((circle, index) => {
      circle.radius.set(newRadii[index], startFrame, deltaFrames, easing);
    });

    this.initProps();
  }

  getComponents(frame: number): React.ReactElement[] {
    return this.circles
      .map((circle) => circle.getComponent(frame))
      .filter((component): component is React.ReactElement => component !== null);
  }
  
}

export default Circles;
