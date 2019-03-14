import React from 'react';

const Title = ({ steps }) => {
    return (
        <div className="title">
            <h1 className="name">Joe Czarnecki</h1>
            <h2 className="days-passed">{steps} Days</h2>

        </div>
    );
}
export default Title;