
export const circlePos = (radius, steps, centerX, centerY) =>{
    let xValues = [centerX];
    let yValues = [centerY];

    for (var i = 0; i < steps; i++) {
        xValues[i] = (centerX + radius * Math.cos(2 * Math.PI * i / steps));
        yValues[i] = (centerY + radius * Math.sin(2 * Math.PI * i / steps));
    }
    return (
       {xValues, yValues}
    );

}