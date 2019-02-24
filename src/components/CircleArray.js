import React from 'react';
import Circle from '../icons/Circle';
import { circlePos } from './circlePos';


const CircleArray = ({ radius, steps, centerX, centerY, spread }) => {
    
    //Create an array of Circles
    const circArr = new Array(Number(steps)).fill(<Circle />);
    
    // Add x position, y positon & radius values
    let position = [];
    position = circlePos(radius, steps, centerX, centerY, spread);
    
    // map position values to array
    const renderedCircles = circArr.map((_circle, i) => {
        let xPos = position.xValues[i];
        let yPos = position.yValues[i];
       
        return <Circle key={i} radius={radius} cx={xPos} cy={yPos} />;
        
        }
        
    );
    
    return (
        <div className="circle-box">
            <svg 
                className="circle-array"
                width={radius * 4 + 10} 
                height={radius * 4 + 10}
            >
                {renderedCircles}
            </svg>
        </div>
        
        
    );
    }


export default CircleArray