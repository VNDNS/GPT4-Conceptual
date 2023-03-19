import easingFunctions from './easingFunctions';

class Signal {
  constructor(length) {
    this.values = new Array(length).fill(0);
  }

  setValue(startFrame, endValue, deltaFrames = 30, easing = 'ease') {
    const startValue = this.values[startFrame];
    const endFrame = startFrame + deltaFrames;

    for (let frame = startFrame; frame <= endFrame; frame++) {
      const t = (frame - startFrame) / (endFrame - startFrame);
      const value = this.interpolate(startValue, endValue, t, easing);
      this.values[frame] = value;
    }

    // Set all entries after endFrame to endValue
    for (let frame = endFrame + 1; frame < this.values.length; frame++) {
      this.values[frame] = endValue;
    }
  }

  interpolate(startValue, endValue, t, easing) {
    const easingFunction = easingFunctions[easing] || easingFunctions.ease;
    const easedT = easingFunction(t);
    return startValue + (endValue - startValue) * easedT;
  }

  getValue(frame) {
    return this.values[frame];
  }
}


export default Signal
