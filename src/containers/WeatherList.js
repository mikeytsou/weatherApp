import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/Chart';

class WeatherList extends Component {
  // this function renders a single city(row)
  renderWeather(cityData) {
    const name = cityData.city.name;
    // returns an array of temps, pressures, and humidities for each
    const temperature = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => temp * (9 / 5) - 459.67); // _.map converts to fahrenheit
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temperature} color="orange" units="°F" /></td>
        <td><Chart data={pressure} color="blue" units="hPa" /></td>
        <td><Chart data={humidity} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="four wide">City</th>
            <th className="four wide">Temperature (°F)</th>
            <th className="four wide">Pressure (hPa)</th>
            <th className="four wide">Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // es6 syntax shortcut
}

export default connect(mapStateToProps)(WeatherList);
