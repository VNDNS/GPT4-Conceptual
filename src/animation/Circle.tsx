import Signal from "./Signal"
import Signal2D from "./Signal2D"
import { Point } from "../types"
import React from 'react';

interface CircleProps {
  position: {
    x: number;
    y: number;
  };
  radius: number;
}

interface Props {
  props: CircleProps;
}

class Circle {
  position: Signal2D
  radius: Signal
  propsArray: any[]

  constructor(position: Point, radius: number) {
    this.position = new Signal2D(position)
    this.radius = new Signal(radius)
    this.propsArray = []
  }

  initProps() {
    const propsArray = []
    
    for (let i = 0; i < this.position.getArray().length; i++) {
      const pos = this.position.get(i);
      const r = this.radius.get(i)
      propsArray.push({position: pos, radius: r})
    }
    this.propsArray = propsArray
  }

  getComponent(i: number){

    const props = this.propsArray[i]
    
    const component: React.FC<CircleProps> = (props) => {
      const { position, radius } = props;
      return (
        <>
          <circle cx={position.x} cy={position.y} r={radius} fill='coral' />
        </>
      );
    };

    return component(props)
  }
}

export {Circle}