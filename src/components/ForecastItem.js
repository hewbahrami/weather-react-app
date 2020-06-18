import React from 'react';

const ForecastItem = ({ temp, icon, day, hour }) => {
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
                icon = icons.Thunderstorm;
                return icon
            case range >= 300 && range <= 321:
                icon = icons.Drizzle;
                return icon
            case range >= 500 && range <= 531:
                icon = icons.Rain;
                return icon
            case range >= 600 && range <= 622:
                icon = icons.Snow;
                return icon
            case range >= 701 && range <= 781:
                icon = icons.Fog;
                return icon
            case range === 800:
                icon = icons.Clear;
                return icon
            case range >= 801 && range <= 804:
                icon = icons.Clouds;
                return icon
            default:
                icon = icons.Clouds;
                return icon
        }
    }

    const getDayOfWeek = (value) => {
        let date = new Date(value);
        date = date.getDay();
        switch (true) {
            case date === 0:
                return 'Sunday';
            case date === 1:
                return 'Monday';
            case date === 2:
                return 'Tuesday'
            case date === 3:
                return 'Wednesday'
            case date === 4:
                return 'Thursday'
            case date === 5:
                return 'Friday'
            case date === 6:
                return 'Saturday'
            case date === 7:
                return 'Sunday'
            default:
                return date
        }
    }


    return (
        <div className="forecast-item">
            {day && <h1 className="forecast-day">{getDayOfWeek(day)}</h1>}
            {temp && <p className="forecast-temp">{Math.round(temp)}</p>}
            {icon && <i className={`wi ${getForecastIcon(icon)} forecast-icon`} />}
        </div >
    )
}


export default ForecastItem
