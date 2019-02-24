import React from 'react';
import '../style/style.css';
import CircleArray from './CircleArray';

const radius = 100;
const steps = 36;
const centerX = 350;
const centerY = 500;



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
                />
            </div>
        );
    }
}

export default App;