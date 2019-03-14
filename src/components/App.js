import React from 'react';
import moment from 'moment';
import '../style/style.css';
import CircleArray from './CircleArray';
import Title from './Title';


let radius = 0;
let steps = moment().diff("2019-02-14", "days"); 
let spread = 0;
let centerX = 0;
let centerY = 0;



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, r: [] };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    } 

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

       
    render() {
        // Square the SVG box and subtract margins
        if (this.state.width < this.state.height) {
            centerX = this.state.width - 20;
            centerY =this.state.width - 20;
            radius = (this.state.width -60)/4;
        } else { // no need to subtract margins here
            centerX = this.state.height;
            centerY = this.state.height;
            radius = (this.state.height-200)/4;
        }

        
        return(
            
            <div className="ui container">
                <Title steps={steps} />
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