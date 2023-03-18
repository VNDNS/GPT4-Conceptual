import Signal from './Signal';

class Signal2D {
  constructor(length) {
    this.x = new Signal(length);
    this.y = new Signal(length);
  }

  setValue(startFrame, endValue, deltaFrames = 30, easing = 'ease') {
    this.x.setValue(startFrame, endValue.x, deltaFrames, easing);
    this.y.setValue(startFrame, endValue.y, deltaFrames, easing);
  }

  getValue(frame) {
    return {
      x: this.x.getValue(frame),
      y: this.y.getValue(frame),
    };
  }
}

export default Signal2D;
