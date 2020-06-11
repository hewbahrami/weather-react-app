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
    error: null
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
        error: null
      })
    } else {
      this.setState({ error: 'please enter valid city' })
    }

  }

  render() {
    const { temperature, feels_like, high, low, city, humidity, description, error } = this.state;
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} city={this.state.city} />
        <Weather
          temperature={temperature}
          feels_like={feels_like}
          high={high}
          low={low}
          city={city}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    )
  }
}


export default App;
