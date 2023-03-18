import React from 'react';
import { useContext } from 'react';
import useCurrentFrame from '../hooks/useCurrentFrame';
import GlobalContext from '../contexts/GlobalContext';

const ControlPanel = () => {

  const { isPlaying, setIsPlaying } = useContext(GlobalContext);
  const {currentFrame, setCurrentFrame} = useCurrentFrame();

  const resetScene = () => {
    setCurrentFrame(0)
  }

  return (
    <div className='control-panel'>
      <button onClick={() => {setIsPlaying(prev => !prev)}}>{isPlaying? 'pause': 'play'}</button>
      <div className='frame-count'>{currentFrame}</div>
      <button onClick={resetScene}>reset</button>
    </div>
  );
};

export default ControlPanel;
