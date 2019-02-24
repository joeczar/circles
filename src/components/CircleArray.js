import React from 'react';
import Circle from '../icons/Circle';
import { circlePos } from './circlePos';


const CircleArray = ({ radius, steps, centerX, centerY }) => {
    
    let position = [];
    
   // let circles = [];

    //Create an array of Circles
    const circArr = new Array(Number(steps)).fill(<Circle />);
    
    // Add x position, y positon & radius values
    
    position = circlePos(radius, steps, centerX, centerY);


    
    const renderedCircles = circArr.map((_circle, i) => {
        let xPos = position.xValues[i];
        let yPos = position.yValues[i];
       
        return <Circle key={i} radius={radius} cx={xPos} cy={yPos} />;
        
        }
        
    );
    console.log(renderedCircles);
    
    return (
        
        <svg width="100%" height="100%" >
            {renderedCircles}
        </svg>
        
        
    );
    }


export default CircleArray