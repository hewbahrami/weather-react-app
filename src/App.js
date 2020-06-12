import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const api_key = 'e9c60f49f115f9ff8f3f868feb3037b8';

class App extends Component {

  state = {
    city: null,
    temperature: null,
    feels_like: null,
    high: null,
    low: null,
    humidity: null,
    description: null,
    icon: null,
    error: null,

  }

  icon = {
    Thunderstorm: "wi-thunderstorm",
    Rain: "wi-storm-showers",
    Drizzle: "wi-sleet",
    Snow: "wi-snow",
    Fog: "wi-fog",
    Clear: "wi-day-sunny",
    Clouds: "wi-day-fog"
  }

  getWeatherIcon(icons, range) {
    switch (true) {
      case range >= 200 && range <= 232:
        this.setState({ icon: this.icon.Thunderstorm });
        break;
      case range >= 300 && range <= 321:
        this.setState({ icon: this.icon.Drizzle });
        break;
      case range >= 500 && range <= 531:
        this.setState({ icon: this.icon.Rain });
        break;
      case range >= 600 && range <= 622:
        this.setState({ icon: this.icon.Snow });
        break;
      case range >= 701 && range <= 781:
        this.setState({ icon: this.icon.Fog });
        break;
      case range === 800:
        this.setState({ icon: this.icon.Clear });
        break;
      case range >= 801 && range <= 804:
        this.setState({ icon: this.icon.Clouds });
        break;
      default:
        this.setState({ icon: this.icon.Clouds })
    }
  }



  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`);
    const data = await api_call.json();
    if (city) {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        high: data.main.temp_max,
        low: data.main.temp_min,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: null
      })
    } else {
      this.setState({ error: 'please enter valid city' })
    }
    this.getWeatherIcon(this.icon, data.weather[0].id)

  }

  render() {
    const { temperature, feels_like, high, low, city, humidity, description, icon, error } = this.state;
    return (
      <div className="container">
        <div className="title-form">
          <Titles />
          <Form getWeather={this.getWeather} city={this.state.city} />
        </div>
        <Weather
          temperature={temperature}
          feels_like={feels_like}
          high={high}
          low={low}
          city={city}
          humidity={humidity}
          description={description}
          icon={icon}
          error={error}
        />
      </div>

    )
  }
}


export default App;
