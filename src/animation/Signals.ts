import Signal from './Signal';
import easingFunctions from "./easingFunctions";

type EasingFunctionKey = keyof typeof easingFunctions;
const duration = 200;

class Signals {
  private signals: Signal[];

  constructor(signalArray: number[]) {
    this.signals = signalArray.map((value) => new Signal(value));
  }

  get(frame: number): number[] {
    return this.signals.map((signal) => signal.get(frame));
  }

  getArray(): number[][] {
    return this.signals.map((signal) => signal.getArray());
  }

  connect(fn: (frame: number) => number[]): void {
    this.signals.forEach((signal, index) => {
      signal.connect((frame) => fn(frame)[index]);
    });
  }

  set(
    values: number[],
    startFrame: number,
    deltaFrames: number = 60,
    easing: EasingFunctionKey = "ease"
  ): void {
    this.signals.forEach((signal, index) => {
      signal.set(values[index], startFrame, deltaFrames, easing);
    });
  }
}

export default Signals;
