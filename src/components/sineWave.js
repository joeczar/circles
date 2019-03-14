// Generate a sine wave to manipulate the radius of the circles

export const sineWave = (steps, radius) => {
    const time = Date.now() /64;
    let sine = 0;
    let stepsArray = Array(Number(steps));
    
            for (let i = 0; i < stepsArray.length;i++){
                sine = Math.sin(i*time);
                sine = (sine + 3.0)/6.0;
                stepsArray[i] = sine*radius;
            }
            
             return {stepsArray};
        }

