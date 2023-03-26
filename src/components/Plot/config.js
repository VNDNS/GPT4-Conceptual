const data = Array.from({ length: 100 }, (_, index) => ({
  x: index,
  y: Math.sin(index * 1)*5 + 2,
}));

export const config = {
  data: data,
  x:100,
  y:  100,
  dimensions: {
    width: 600,
    height: 400,
  },
  domain: {
    left: -4,
    right: 4,
    top: 4,
    bottom: -4
  },
  axes: {
    tick: {
      size: 10,
      interval: 1
    },
  },
  styles: {
    axis: {
      stroke: 'white',
      strokeWidth: 2,
    },
    tick: {
      stroke: 'white',
      strokeWidth: 2,
    },
    line: {
      stroke: 'white',
      strokeWidth: 2,
      fill: 'none',
    },
    label: {
      fontSize: 16,
      fontFamily: 'Arial, sans-serif',
      fill: 'white',
    },
  },
};
