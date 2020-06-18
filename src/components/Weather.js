import React from 'react';

const Weather = ({ city, description, icon, temperature, high, low, feels_like, humidity, error }) => {
    return (
        <div className="weather">
            <div className="info-container">
                <div className="city-description">
                    {city && <p className="city">{city}</p>}
                    {description && <p className="description">{description}</p>}
                </div>
                <div className="basic-info">
                    {icon && <i className={`wi ${icon} icon`} />}
                    <div className="temp-feel">
                        {temperature && <p className="temp"><span className="wi wi-thermometer"></span>{Math.round(temperature)}°</p>}
                        {feels_like && <p className="feels-like">feels like: {Math.round(feels_like)}°</p>}
                    </div>
                </div>
                <div className="high-low-container">
                    {high && <p>high: {Math.round(high)}°</p>}
                    {low && <p>low: {Math.round(low)}°</p>}
                    {humidity && <p className="humidity">humidity: {humidity}%</p>}
                </div>
            </div>
            {/* <div className="forecast-container">
            </div> */}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather
