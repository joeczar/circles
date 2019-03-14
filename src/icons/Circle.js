import React from 'react';

const Circle = ({ radius, cx, cy, spread }) => (
    
    <g className="s-circle" id="circle" >
        <circle 
            cx={cx} 
            cy={cy} 
            r= {radius - spread} 
            stroke="grey" 
            strokeWidth="1" 
            
             
        />
    </g>)

export default Circle;