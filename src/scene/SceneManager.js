import React, { useState, useEffect, useRef, useContext } from 'react';
import Circle from '../shapes/Circle';
import useCurrentFrame from '../hooks/useCurrentFrame';
import AnimationControlContext from '../contexts/AnimationControlContext';
import Signal from '../animation/Signal';

const SceneManager = () => {

  const x = new Signal(200)
  x.setValue(60, 130, 0, 1, 'ease')

  const { isPlaying, setIsPlaying } = useContext(AnimationControlContext);
  const {currentFrame, setCurrentFrame} = useCurrentFrame();
  const [animationFrameId, setAnimationFrameId] = useState(null);
  const animateRef = useRef();

  const resetScene = () => {
    setCurrentFrame(0)
  }

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

  const height = 400
  const width = 1100
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <div className='scene-manager'>
      <svg width={width} height={height} viewBox={viewBox}>
        <Circle cx={x.getValue(currentFrame)*100+200} cy={100} r={23} fill='gray' />
      </svg>
      <div className='control-panel'>
        <button onClick={() => {setIsPlaying(prev => !prev)}}>{isPlaying? 'pause': 'play'}</button>
        <div className='frame-count'>{currentFrame}</div>
        <button onClick={resetScene}>reset</button>
      </div>
    </div>
  );
};

export default SceneManager;
