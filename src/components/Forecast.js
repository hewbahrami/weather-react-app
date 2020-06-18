import React from 'react';
import ForecastItem from './ForecastItem';

function Forecast({ forecasts }) {
    console.log(forecasts)
    return (
        <div className="forecast-container">
            {forecasts.map(forecast =>
                (

                    <ForecastItem key={forecasts.indexOf(forecast)} temp={forecast.main.temp} iconRange={forecast.weather[0].id} />
                    // <div className="fc-container">
                    //     <p>{forecast.main.temp}</p>
                    //     <p>{forecast.weather[0].main}</p>
                    // </div>
                ))}

        </div>
    )
}

export default Forecast
