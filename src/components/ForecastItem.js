import React from 'react';

const ForecastItem = ({ temp, iconRange }) => {

    const icons = {
        Thunderstorm: "wi-thunderstorm",
        Rain: "wi-storm-showers",
        Drizzle: "wi-sleet",
        Snow: "wi-snow",
        Fog: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    }

    const getForecastIcon = (range) => {
        switch (true) {
            case range >= 200 && range <= 232:
                iconRange = icons.Thunderstorm;
                return iconRange
            case range >= 300 && range <= 321:
                iconRange = icons.Drizzle;
                return iconRange
            case range >= 500 && range <= 531:
                iconRange = icons.Rain;
                return iconRange
            case range >= 600 && range <= 622:
                iconRange = icons.Snow;
                return iconRange
            case range >= 701 && range <= 781:
                iconRange = icons.Fog;
                return iconRange
            case range === 800:
                iconRange = icons.Clear;
                return iconRange
            case range >= 801 && range <= 804:
                iconRange = icons.Clouds;
                return iconRange
            default:
                iconRange = icons.Clouds;
                return iconRange
        }
    }


    return (
        <div>
            <h1 className="">{Math.round(temp)}</h1>
            <i className={`wi ${getForecastIcon(iconRange)}`} />
        </div>
    )
}


export default ForecastItem
