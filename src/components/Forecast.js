import React from 'react';
import ForecastItem from './ForecastItem';

function Forecast({ forecasts }) {
    // const onlyUnique = (value, index, self) => {
    //     return self.indexOf(value) === index;
    // }
    // const daysArray = forecasts.map(forecast => forecast.dt_txt.slice(8, 11)).filter(onlyUnique);
    // console.log(daysArray)
    // const noon = forecasts.filter(forecast => forecast.dt_txt.slice(10, 13) === '12')
    // console.log(noon)
    // forecasts = forecasts.slice(0, 9);
    // console.log(forecasts)
    // console.log(forecasts)
    const noonForecast = forecasts.filter(forecast => forecast.dt_txt.slice(11, 13) === '12');

    return (
        <div className="forecast-container">
            {noonForecast.map(forecast =>
                (
                    <ForecastItem key={noonForecast.indexOf(forecast)} temp={forecast.main.temp} icon={forecast.weather[0].id} day={forecast.dt_txt} />
                ))}

        </div>
    )
}

export default Forecast
