import { useState, useEffect, useRef, useContext } from 'react';
import AnimationControlContext from '../contexts/AnimationControlContext';

const useCurrentFrame = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const incrementFrameRef = useRef();
  const timeoutIdRef = useRef();
  const { isPlaying } = useContext(AnimationControlContext);

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

  return currentFrame;
};

export default useCurrentFrame;
