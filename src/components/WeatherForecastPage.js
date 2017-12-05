import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/weather';
import Header from './../components/Header';
import Chart from '../components/chart';


class WeatherForecastPage extends Component {

  constructor(props) {
    super(props);
    this.state = { city: 'Tel Aviv' };
  }

  componentDidMount() {
    this.props.fetchWeather(this.state.city);
  }

  renderWeather(cityData) {
    

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
      .map(temp_k => temp_k - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    
    return (
      
      <tr key={ name }>
        <td>
          <Chart data={temps} color="red" units="C"/>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="green" units="%" />
        </td>
      </tr>
      
    )
  }

  render() {
    return (
      <div className="weather-container">
        <Header />
        <h1>Weather for the next 4 days</h1>
        <table className="weather-table">
          <thead>
            { this.props.weather.data && <tr><td colSpan="3"><h3>{this.props.weather.data.city.name}</h3></td></tr> } 
            <tr>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.data && this.renderWeather(this.props.weather.data) }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps, { fetchWeather })(WeatherForecastPage);