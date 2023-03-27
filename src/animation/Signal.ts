import easingFunctions from "./easingFunctions";
type EasingFunctionKey = keyof typeof easingFunctions;
const duration = 200;

class Signal {
  private locked: boolean;
  private values: number[];
  private compute: () => number[];

  constructor(value: number) {
    this.locked = false;
    this.values = new Array(duration).fill(value);
    this.compute = () => this.values;
  }

  get(frame: number): number {
    return (this.compute())[frame];
  }

  getArray(){
    return this.compute()
  }

  setArray(newValues: number[]): void {
    if (newValues.length !== this.values.length) {
      console.error("New values array length must match the current values array length.");
      return;
    }

    if (!this.locked) {
      this.values = newValues;
    } else {
      console.error("Signal is locked. Cannot set directly.");
      return;
    }
  }


  connect(fn: (frame: number) => number): void {
    if (!this.locked) {
      this.setComputeFn(fn);
      this.locked = true;
    } else {
      console.error("Signal is locked. Cannot connect again.");
    }
  }

  set(
    value: number,
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

      const transitionValues = this.calculateTransitionValues( this.values[startFrame], value, deltaFrames, easingFunction );

      this.updateValues(startFrame, deltaFrames, transitionValues, value);
    } else {
      console.error("Signal is locked. Cannot set directly.");
      return
    }
  }

  private setComputeFn(fn: (frame: number) => number): void {
    this.compute = () => new Array(duration).fill(0).map((_, i) => {return fn(i);});
  }

  private calculateTransitionValues(
    startValue: number,
    endValue: number,
    deltaFrames: number,
    easingFunction: (t: number) => number
  ): number[] {
    return new Array(deltaFrames)
      .fill(0)
      .map((_, i) => {
        const t = i / (deltaFrames - 1);
        const easedT = easingFunction(t);
        return startValue + (endValue - startValue) * easedT;
      });
  }

  private updateValues(
    startFrame: number,
    deltaFrames: number,
    transitionValues: number[],
    endValue: number
  ): void {
    for (let i = 0; i < duration; i++) {
      if (i < startFrame) {
        continue;
      } else if (i < startFrame + deltaFrames) {
        this.values![i] = transitionValues[i - startFrame];
      } else {
        this.values![i] = endValue;
      }
    }
  }
}

export default Signal;
