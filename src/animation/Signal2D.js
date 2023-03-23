import Signal from './Signal';

class Signal2D {
  constructor(x,y) {
    this.x = new Signal(x);
    this.y = new Signal(y);
  }

  setValue(startFrame, endValue, deltaFrames = 30, easing = 'ease') {
    this.x.setValue(startFrame, endValue.x, deltaFrames, easing);
    this.y.setValue(startFrame, endValue.y, deltaFrames, easing);
  }

  getValue(frame) {
    return {
      x: this.x.value(frame),
      y: this.y.value(frame),
    };
  }
}

export default Signal2D;
