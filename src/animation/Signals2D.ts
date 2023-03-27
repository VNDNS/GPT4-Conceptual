import Signal2D from './Signal2D';
import easingFunctions from "./easingFunctions";

type EasingFunctionKey = keyof typeof easingFunctions;
const duration = 200;

interface Point {
  x: number;
  y: number;
}

class Signals2D {
  private signals: Signal2D[];

  constructor(points: Point[]) {
    this.signals = points.map((value) => new Signal2D(value));
  }

  get(frame: number): Point[] {
    return this.signals.map((signal) => signal.get(frame));
  }

  getArray(): Point[][] {
    return this.signals.map((signal) => signal.getArray());
  }

  connect(fn: (frame: number) => Point[]): void {
    this.signals.forEach((signal, index) => {
      signal.connect((frame) => fn(frame)[index]);
    });
  }

  set(
    values: Point[],
    startFrame: number,
    deltaFrames: number = 60,
    easing: EasingFunctionKey = "ease"
  ): void {
    this.signals.forEach((signal, index) => {
      signal.set(values[index], startFrame, deltaFrames, easing);
    });
  }
}

export default Signals2D;
