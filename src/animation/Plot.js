import { cloneDeep } from 'lodash';
import React from 'react';
import Signal2D from '../animation/Signal2D';
import Signal from './Signal';

function fillArray(n) {
  const arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

const duration = 200

class PlotClass {
  constructor(config) {
    
    this.dimensions = {}
    this.domain = {}
    this.position = new Signal2D(config.position)
    this.axes = {
      tick: {}
    }

    this.frames = fillArray(duration)

    this.data = []
    this.styles = config.styles

    // Instantiate dimensions signals
    this.dimensions.width = new Signal(config.dimensions.width)
    this.dimensions.height = new Signal(config.dimensions.height)

    // Instantiate domain signals
    this.domain.left = new Signal(config.domain.left)
    this.domain.right = new Signal(config.domain.right)
    this.domain.top = new Signal(config.domain.top)
    this.domain.bottom = new Signal(config.domain.bottom)

    // Instantiate axes signals
    this.axes.tick.size = new Signal(config.axes.tick.size)
    this.axes.tick.interval = new Signal(config.axes.tick.interval)

    // this.props = {}
  }

  generateHorizontalTicksArray() {
    const frames = this.frames

    const ticksArray = frames.map((i) => {
      const axisLength = this.dimensions.width.value(i)
      const min = this.domain.left.value(i)
      const max = this.domain.right.value(i)
      const tickInterval = this.axes.tick.interval.value(i)

      const ticks = computeTicks(axisLength, min, max, tickInterval)

      return ticks
    })

    return ticksArray

  }

  generatePositionArray() {
    const frames = this.frames

    const positionArray = frames.map((i) => {
    
      
    
    })

    this.props.some = someArray

  }

  getProps() {
    const ticksArray = this.generateHorizontalTicksArray()
    const propsArray = this.frames.map((i) => {
      const props = {
        position: this.position.getValue(i),
        ticks: ticksArray[i],
        styles: this.styles
      }
      return props
    })

    // this.props.styles = this.styles
    // this.props.position = this.position


    return propsArray
  }
}

export { PlotClass }

function computeTickValues(min, max, tickInterval) {
  const tickValues = [];

  // Find the first tick position that is a multiple of tickInterval and greater than or equal to min
  const firstTick = Math.ceil(min / tickInterval) * tickInterval;

  // Generate ticks from the first tick to the max value with the given tickInterval
  for (let tick = firstTick; tick <= max; tick += tickInterval) {
    tickValues.push(tick);
  }

  return tickValues;
}

function computeTickPositions(axisLength, min, max, ticks) {
  const tickPositions = [];

  // Calculate the scale factor to convert domain values to pixel values
  const scaleFactor = axisLength / (max - min);

  // Compute the position of each tick in pixels
  ticks.forEach(tick => {
    const position = (tick - min) * scaleFactor;
    tickPositions.push(position);
  });

  return tickPositions;
}

function computeTickOpacity(axisLength, tickPositions) {
  const edgeThreshold = 0.05 * axisLength; // 10% threshold for linear transition near the edges
  const tickOpacity = [];
  console.log(edgeThreshold);

  tickPositions.forEach(position => {
    let opacity;
    if (position <= edgeThreshold) {
      opacity = position / edgeThreshold; // Linear transition from 0 to 1 within the edge threshold
    } else if (position >= axisLength - edgeThreshold) {
      opacity = (axisLength - position) / edgeThreshold; // Linear transition from 1 to 0 within the edge threshold
    } else {
      opacity = 1; // Inside the domain, the opacity is mostly 1
    }

    tickOpacity.push(opacity);
  });


  return tickOpacity;
}

function computeTicks(axisLength, min, max, tickInterval) {
  // Compute tick values
  const tickValues = computeTickValues(min, max, tickInterval);

  // Compute tick positions
  const tickPositions = computeTickPositions(axisLength, min, max, tickValues);

  // Compute tick opacity
  const tickOpacity = computeTickOpacity(axisLength, tickPositions);

  // Create an array of objects containing value, position, and opacity
  const ticks = tickValues.map((value, index) => ({
    value: value,
    position: tickPositions[index],
    opacity: tickOpacity[index],
  }));

  return ticks;
}

