import { useState, useEffect, useRef, useContext } from 'react';
import AnimationControlContext from '../contexts/AnimationControlContext';

const useCurrentFrame = () => {
  const { currentFrame, setCurrentFrame } = useContext(AnimationControlContext);

  return {currentFrame, setCurrentFrame};
};

export default useCurrentFrame;
