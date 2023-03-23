import easingFunctions from './easingFunctions';

const duration = 200

class Signal {
  constructor(initialValue = 0) {
    this.values = new Array(duration).fill(initialValue);
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

  setValues(value) {
    this.values = this.values.fill(value)
  }

  interpolate(startValue, endValue, t, easing) {
    const easingFunction = easingFunctions[easing] || easingFunctions.ease;
    const easedT = easingFunction(t);
    return startValue + (endValue - startValue) * easedT;
  }

  value(frame) {
    return this.values[frame];
  }
}


export default Signal
