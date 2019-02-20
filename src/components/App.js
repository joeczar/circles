import React from 'react';
import '../style/style.css';
import CircleArray from './CircleArray';

class App extends React.Component {
     
    render() {
        return(
            <div className="ui container">
                <CircleArray
                    circles="9" className="circles" 
                />
            </div>
        );
    }
}

export default App;