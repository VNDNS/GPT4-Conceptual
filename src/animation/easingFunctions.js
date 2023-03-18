// animation/easingFunctions.js

const easingFunctions = {
  linear: t => t,
  ease: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Add more easing functions as needed
};

export default easingFunctions;
