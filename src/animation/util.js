export function computeTickValues(min, max, tickInterval) {
  const tickValues = [];

  // Find the first tick position that is a multiple of tickInterval and greater than or equal to min
  const firstTick = Math.ceil(min / tickInterval) * tickInterval;

  // Generate ticks from the first tick to the max value with the given tickInterval
  for (let tick = firstTick; tick <= max; tick += tickInterval) {
    tickValues.push(tick);
  }

  return tickValues;
}

export function computeTickPositions(axisPoints, min, max, ticks) {
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

export function computeTickOpacity(axisLength, tickPositions) {
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

export function computeTicks(axisLength, min, max, tickInterval) {
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

export function fillArray(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
}