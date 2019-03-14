import React from 'react';
import Circle from '../icons/Circle';

import { circlePos } from './circlePos';


const CircleArray = ({ radius, steps, centerX, centerY, spread }) => {
    
    //Create an array of Circles
    const circArr = new Array(Number(steps)).fill(<Circle />);
    
    // Add x position, y positon & radius values
    let position = [];
    position = circlePos(radius, steps, centerX, centerY, spread);
    
    //sine wave for radius
    
    // map position values to array
    const renderedCircles = circArr.map((_circle, i) => {
        let xPos = position.xValues[i];
        let yPos = position.yValues[i];
        console.log(i);
        return <Circle key={i} radius={radius} cx={xPos} cy={yPos} spread={spread} />;
        }
    );
    let svgWidth = 0;
    let svgHeight = 0
    if (centerX > centerY) {
        svgWidth = centerY;
        svgHeight = centerY;
    } else {
        svgWidth = centerX;
        svgHeight = centerX;
    }
    
    return (
        <div className="circle-box" >
            <svg 
                className="circle-array"
                width={svgWidth} 
                height={svgHeight}
                >
                
                {renderedCircles}
            </svg>
            
        </div>
        
        
    );
    }


export default CircleArray