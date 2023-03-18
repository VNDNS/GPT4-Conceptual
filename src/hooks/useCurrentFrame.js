import { useState, useEffect, useRef, useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

const useCurrentFrame = () => {
  const { currentFrame, setCurrentFrame } = useContext(GlobalContext);

  return {currentFrame, setCurrentFrame};
};

export default useCurrentFrame;
