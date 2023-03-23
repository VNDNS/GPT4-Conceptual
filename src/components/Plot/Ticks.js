import React from "react"
import useCurrentFrame from "../../hooks/useCurrentFrame"

const Ticks = ({props}) => {
  
  const ticks = props.ticks
  const tickStyle = props.styles.tick
  const labelStyle = props.styles.label
  
  const y = 200
  const x0 = 100

  return ticks.map((tick, index) => (
    <>
      <line key={`${index}`} x1={x0 + tick.position} y1={y} x2={x0 + tick.position} y2={y - 10} style={tickStyle} opacity={tick.opacity}/>
      <text key={`${index}-value`} x={x0 + tick.position} y={y- 10 - 5} textAnchor="middle" dominantBaseline="baseline" style={labelStyle} opacity={tick.opacity} >
        {tick.value} 
      </text>
    </>
  ))
}

export {Ticks}
