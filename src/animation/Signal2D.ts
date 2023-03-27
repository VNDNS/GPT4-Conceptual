import easingFunctions from "./easingFunctions";

type EasingFunctionKey = keyof typeof easingFunctions;

const duration = 200;

interface Point {
  x: number;
  y: number;
}

class Signal2D {
  private locked: boolean;
  private values: Point[];
  private compute: () => Point[];

  constructor(value: Point) {
    this.locked = false;
    this.values = new Array(duration).fill(value);
    this.compute = () => this.values;
  }

  get(frame: number): Point {
    return this.compute()[frame];
  }

  getArray(): Point[] {
    return this.compute();
  }

  setArray(newValues: Point[]): void {
    if (newValues.length !== this.values.length) {
      console.error("New values array length must match the current values array length.");
      return;
    }

    if (!this.locked) {
      this.values = newValues;
    } else {
      console.error("Signal2D is locked. Cannot set directly.");
      return;
    }
  }


  connect(fn: (frame: number) => Point): void {
    if (!this.locked) {
      this.setComputeFn(fn);
      this.locked = true;
    } else {
      console.error("Signal2D is locked. Cannot connect again.");
    }
  }

  set(
    value: Point,
    startFrame: number,
    deltaFrames: number = 60,
    easing: EasingFunctionKey = "ease"
  ): void {
    if (!this.locked) {
      const easingFunction = easingFunctions[easing];

      if (!easingFunction) {
        console.error(`Easing function '${easing}' not found.`);
        return;
      }

      const transitionValues = this.calculateTransitionValues(
        this.values[startFrame],
        value,
        deltaFrames,
        easingFunction
      );

      this.updateValues(startFrame, deltaFrames, transitionValues, value);
    } else {
      console.error("Signal2D is locked. Cannot set directly.");
      return;
    }
  }

  private setComputeFn(fn: (frame: number) => Point): void {
    this.compute = () =>
      new Array(duration)
        .fill(0)
        .map((_, i) => {
          return fn(i);
        });
  }

  private calculateTransitionValues(
    startValue: Point,
    endValue: Point,
    deltaFrames: number,
    easingFunction: (t: number) => number
  ): Point[] {
    return new Array(deltaFrames)
      .fill(0)
      .map((_, i) => {
        const t = i / (deltaFrames - 1);
        const easedT = easingFunction(t);
        return {
          x: startValue.x + (endValue.x - startValue.x) * easedT,
          y: startValue.y + (endValue.y - startValue.y) * easedT,
        };
      });
  }

  private updateValues(
    startFrame: number,
    deltaFrames: number,
    transitionValues: Point[],
    endValue: Point
  ): void {
    for (let i = 0; i < duration; i++) {
      if (i < startFrame) {
        continue;
      } else if (i < startFrame + deltaFrames) {
        this.values[i] = transitionValues[i - startFrame];
      } else {
        this.values[i] = endValue;
      }
    }
  }
}

export default Signal2D;
