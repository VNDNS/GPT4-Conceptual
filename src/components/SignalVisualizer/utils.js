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
