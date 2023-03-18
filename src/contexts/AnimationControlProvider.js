import React, { useEffect, useState } from 'react';
import AnimationControlContext from './AnimationControlContext';

const AnimationControlProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {console.log('hi');},[isPlaying])

  return (
    <AnimationControlContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </AnimationControlContext.Provider>
  );
};

export default AnimationControlProvider;
