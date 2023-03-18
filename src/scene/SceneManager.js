import React, { useState, useEffect, useRef, useContext } from 'react';
import Circle from '../shapes/Circle';
import useCurrentFrame from '../hooks/useCurrentFrame';
import AnimationControlContext from '../contexts/AnimationControlContext';
import Signal from '../animation/Signal';

const SceneManager = () => {

  const x = new Signal(200)
  x.setValue(60, 130, 0, 1, 'ease')

  const { setIsPlaying } = useContext(AnimationControlContext);
  const currentFrame = useCurrentFrame();
  const [animationFrameId, setAnimationFrameId] = useState(null);
  const animateRef = useRef();

  animateRef.current = () => {
    const id = requestAnimationFrame(animateRef.current);
    setAnimationFrameId(id);
  };

  useEffect(() => {
    animateRef.current();
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);


  return (
    <div>
      <h1>{currentFrame}</h1>
      <svg viewBox="0 0 1600 400" >
        <Circle cx={x.getValue(currentFrame)*100+200} cy={100} r={23} fill='gray' />
      </svg>
      <button onClick={() => {setIsPlaying(prev => !prev)}}>play</button>
    </div>
  );
};

export default SceneManager;
