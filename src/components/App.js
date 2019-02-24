import React from 'react';
import '../style/style.css';
import CircleArray from './CircleArray';

const radius = 120;
const steps = 9;
const centerX = radius * 2 + 5;
const centerY = radius * 2 + 5;
const spread = 1;



class App extends React.Component {
    
    render() {
        return(
            <div className="ui container">
                <CircleArray
                    radius={radius}
                    steps={steps}
                    centerX={centerX}
                    centerY={centerY}
                    className="circles" 
                    spread={spread}
                />
            </div>
        );
    }
}

export default App;