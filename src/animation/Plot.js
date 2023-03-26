import Signal2D from '../animation/Signal2D';
import Signal from './Signal';
import { computeTicks } from './util';
import { fillArray } from './util';

const duration = 200

class PlotClass {
  constructor(config) {
    
    this.dimensions         = {}
    this.domain             = {}
    this.axes               = {}
    this.axis.ticks         = {}
    this.data               = []
    this.styles             = config.styles
    this.frames             = fillArray(duration)
    
    this.position           = new Signal2D(config.x, config.y)
    this.dimensions.width   = new Signal(config.dimensions.width)
    this.dimensions.height  = new Signal(config.dimensions.height)
    this.domain.left        = new Signal(config.domain.left)
    this.domain.right       = new Signal(config.domain.right)
    this.domain.top         = new Signal(config.domain.top)
    this.domain.bottom      = new Signal(config.domain.bottom)
    this.axes.tick.size     = new Signal(config.axes.tick.size)
    this.axes.tick.interval = new Signal(config.axes.tick.interval)
  }

  generateHorizontalTicksArray() {
    const frames = this.frames

    const ticksArray = frames.map((i) => {
      const axisLength   = this.dimensions.width.value(i)
      const min          = this.domain.left.value(i)
      const max          = this.domain.right.value(i)
      const tickInterval = this.axes.tick.interval.value(i)

      const ticks = computeTicks(axisLength, min, max, tickInterval)

      return ticks
    })

    return ticksArray

  }

  generateVerticalTicksArray() {
    const frames = this.frames

    const ticksArray = frames.map((i) => {
      const axisLength   = this.dimensions.height.value(i)
      const min          = this.domain.bottom.value(i)
      const max          = this.domain.top.value(i)
      const tickInterval = this.axes.tick.interval.value(i)

      const ticks = computeTicks(axisLength, min, max, tickInterval)

      return ticks
    })

    return ticksArray

  }

  generateHorizontalLineArray() {
    const frames = this.frames
  
    const horizontalLineArray = frames.map((i) => {
      const axisLength = this.dimensions.width.value(i)
      const x1 = 0
      const y1 = 0
      const x2 = axisLength
      const y2 = 0
  
      return { x1, y1, x2, y2 }
    })
  
    return horizontalLineArray
  }

  generateVerticalLineArray() {
    const frames = this.frames
  
    const verticalLineArray = frames.map((i) => {
      const axisLength = this.dimensions.height.value(i)
      const x1 = 0
      const y1 = 0
      const x2 = 0
      const y2 = axisLength
  
      return { x1, y1, x2, y2 }
    })
  
    return verticalLineArray
  }

  getProps() {
    const horizontalTicksArray = this.generateHorizontalTicksArray()
    const horizontalLineArray = this.generateHorizontalLineArray()
    const verticalTicksArray = this.generateVerticalTicksArray()
    const verticalLineArray = this.generateVerticalLineArray()

    const propsArray = this.frames.map((i) => {
      const props = {
        position: this.position.getValue(i),
        axes: {
          horizontal: {
            ticks: horizontalTicksArray[i],
            line: horizontalLineArray[i],
            styles: this.styles
          },
          vertical: {
            ticks: verticalTicksArray[i],
            line: verticalLineArray[i],
            styles: this.styles
          },
        },
        styles: this.styles
      }
      return props
    })
  
    return propsArray
  }
}
  export { PlotClass }
  