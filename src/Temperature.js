import React from 'react';
import './Temperature.css'
import Weather from './Weather';


let latitude;
let longitude;
// =${latitude}%2C${longitude}

const temperature = (props) => {
    return (
        <div className="Temperature">
            <p>{props.temperature} C</p>
        </div>
    )
}
export default temperature;