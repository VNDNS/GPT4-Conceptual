import React, { useState, useEffect, useRef} from 'react';

const Scene = ({children}) => {

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

  const height = 600
  const width = 1100
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <div className='scene-manager'>
      <svg width={width} height={height} viewBox={viewBox}>
        {children}
      </svg>
    </div>
  );
};

export default Scene;
