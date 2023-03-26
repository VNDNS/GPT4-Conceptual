import React from "react"
import useCurrentFrame from "../../hooks/useCurrentFrame"

const Ticks = ({props}) => {
  
  const ticks = props.ticks
  const tickStyle = props.styles.tick
  const labelStyle = props.styles.label
  
  return ticks.map((tick, index) => (
    <>
      <line key={`${index}`} x1={tick.position} y1={0} x2={tick.position} y2={ -10} style={tickStyle} opacity={tick.opacity}/>
      <text key={`${index}-value`} x={tick.position} y={-10 - 5} textAnchor="middle" dominantBaseline="baseline" style={labelStyle} opacity={tick.opacity} >
        {tick.value} 
      </text>
    </>
  ))
}

export {Ticks}
