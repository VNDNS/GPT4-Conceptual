import React from 'react';
import HorizontalAxis from './HorizontalAxis';
import VerticalAxis from './VerticalAxis';
import PlotLine from './PlotLine';

const Plot = ({ config }) => {
  return (
    <>
      <HorizontalAxis config={config} />
      <VerticalAxis config={config} />
      <PlotLine config={config} />
    </>
  );
};

export default Plot;
