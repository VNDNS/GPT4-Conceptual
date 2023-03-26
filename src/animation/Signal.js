import easingFunctions from "./easingFunctions";

const duration = 200

class Signal {
  constructor(value) {
    this.locked = false;
    this.initialValue = value
    this.values = null
    this.compute = () => this.initialValue
  }

  get(frame = null) {
    if(frame === null){
      return this.compute()
    }
    else {
      return this.compute()[frame]
    }
  }

  connect(fn){
    if(!this.locked){
      this.compute = () => new Array(duration).fill(0).map((_, i) => {
        return fn(i)})
      this.locked = true
    }
    else{
      console.error("Signal is locked. Cannot connect again.")
    }
  }

  set(value, startFrame, deltaFrames = 60, easing = 'ease') {

    if(!this.values){
      this.values = new Array(duration).fill(this.initialValue)
      this.compute = () => this.values
    }

    if (!this.locked) {
      const startValue = this.values[startFrame];
      const endValue = value;
      const easingFunction = easingFunctions[easing];
  
      if (!easingFunction) {
        console.error(`Easing function '${easing}' not found.`);
        return;
      }
  
      const transitionValues = new Array(deltaFrames).fill(0).map((_, i) => {
        const t = i / (deltaFrames - 1);
        const easedT = easingFunction(t);
        return startValue + (endValue - startValue) * easedT;
      });
  
      for (let i = 0; i < duration; i++) {
        if (i < startFrame) {
          continue;
        } else if (i < startFrame + deltaFrames) {
          this.values[i] = transitionValues[i - startFrame];
        } else {
          this.values[i] = endValue;
        }
      }
  
    } else {
      console.error("Signal is locked. Cannot set directly.");
    }
  }
}

export default Signal;


