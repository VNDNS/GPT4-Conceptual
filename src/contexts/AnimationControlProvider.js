import React, { useEffect, useState, useRef } from 'react';
import AnimationControlContext from './AnimationControlContext';

const AnimationControlProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const incrementFrameRef = useRef();
  const timeoutIdRef = useRef();

  const frameInterval = 1000 / 60;

  const incrementFrame = () => {
    setCurrentFrame((prevFrame) => prevFrame + 1);
  };

  incrementFrameRef.current = incrementFrame;

  useEffect(() => {
    const animate = () => {
      if (isPlaying) {
        incrementFrameRef.current();
      }
      timeoutIdRef.current = setTimeout(animate, frameInterval);
    };
    
    animate();
    return () => {
      clearTimeout(timeoutIdRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    if(currentFrame >= 199) setCurrentFrame(0)
  }, [currentFrame])

  return (
    <AnimationControlContext.Provider value={{ isPlaying, setIsPlaying, currentFrame, setCurrentFrame }}>
      {children}
    </AnimationControlContext.Provider>
  );
};

export default AnimationControlProvider;
