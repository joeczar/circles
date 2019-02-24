
export const circlePos = (radius, steps, centerX, centerY, spread) =>{
    let xValues = [centerX];
    let yValues = [centerY];

    if (steps === 1){
      xValues[0] = (radius * 4 +10)/2;
      yValues[0] = (radius * 4 +10)/2;
    }
    else for (var i = 0; i < steps; i++) {
        xValues[i] = (centerX + (radius+spread) * Math.cos(2 * Math.PI * i / steps));
        yValues[i] = (centerY + (radius+spread) * Math.sin(2 * Math.PI * i / steps));
    }
    
    return (
       {xValues, yValues}
    );

}