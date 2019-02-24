import React from 'react';

const Circle = ({ radius, cx, cy }) => (
    <g id="circle" >
        <circle 
            cx={cx} 
            cy={cy} 
            r= {radius} 
            stroke="grey" 
            strokeWidth="1" 
            fill="none" 
        />
    </g>)

export default Circle;