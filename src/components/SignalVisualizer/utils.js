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
  const colors = ['red', 'green', 'purple', 'orange', 'yellow'];
  return colors[index % colors.length];
}

export function getPlotData(signals, options) {
  const { width, height, padding } = options;

  return signals.map((signal) => {
    const normalizedValues = normalize(signal.values);
    return normalizedValues.map((value, index) => ({
      x: (index / (normalizedValues.length - 1)) * (width - 2 * padding) + padding,
      y: (1 - value) * (height - 2 * padding) + padding,
    }));
  });
}
