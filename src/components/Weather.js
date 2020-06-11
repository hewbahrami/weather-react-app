import React from 'react'

const Weather = ({ city, description, temperature, high, low, feels_like, humidity, error }) => {
    return (
        <div>
            {city && <p>Location: {city}</p>}
            {description && <p>{description}</p>}
            {temperature && <p>Temperature: {temperature}°</p>}
            {high && <p>High: {high}</p>}
            {low && <p>Low: {low}</p>}
            {feels_like && <p>Feels Like: {feels_like}</p>}
            {humidity && <p>Humidity: {humidity}</p>}
            {error && <p>{error}</p>}
        </div>
    )
}

export default Weather
