export function normalize(values) {
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue;

  if (range === 0) {
    return values.map(() => 0.5);
  }

  return values.map((value) => (value - minValue) / range);
}

export function getColor(index) {
  const colors = [
    'rgba(255, 0, 0, 0.5)', // red
    'rgba(0, 128, 0, 0.5)', // green
    'rgba(0, 0, 255, 0.5)', // blue
    'rgba(255, 165, 0, 0.5)', // orange
    'rgba(128, 0, 128, 0.5)', // purple
  ];
  return colors[index % colors.length];
}

export function getPlotData(signals, options) {
  const { width, height, padding } = options;

  // Find the maximum value across all signals
  const globalMax = Math.max(...signals.map(signal => Math.max(...signal)));

  // Normalize each signal based on the global maximum value
  const normalize = (signal) => signal.map(value => value / globalMax);

  return signals.map((signal) => {
    const normalizedValues = normalize(signal);
    return normalizedValues.map((value, index) => ({
      x: (index / (normalizedValues.length - 1)) * (width - 2 * padding) + padding,
      y: (1 - value) * (height - 2 * padding) + padding,
    }));
  });
}

