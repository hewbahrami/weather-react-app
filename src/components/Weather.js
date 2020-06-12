import React from 'react';

const Weather = ({ city, description, icon, temperature, high, low, feels_like, humidity, error }) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    return (
        <div className="weather">
            {city && <p className="city">{city}</p>}
            <div className="basic-info">
                {icon && <i className={`wi ${icon} icon`} />}
                <div className="temp-feel">
                    {temperature && <p className="temp"><span className="wi wi-thermometer"></span>{Math.round(temperature)}°</p>}
                    {feels_like && <p className="feels-like">Feels Like: {Math.round(feels_like)}°</p>}
                </div>
            </div>
            {high && <p>High: {Math.round(high)}°</p>}
            {low && <p>Low: {Math.round(low)}°</p>}
            {humidity && <p className="humidity">Humidity: {humidity}%</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather
