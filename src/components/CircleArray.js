import React from 'react';
import Circle from '../icons/Circle';

const CircleArray = ({ circles }) => {
    
    const CircArr = Array(Number(circles)).fill(<Circle />);
    
    return (
    
        <svg 
            width="100%"
            height="100%"
            className="circle-array"

        >
            {CircArr}
        </svg>
        
    );
    }


export default CircleArray