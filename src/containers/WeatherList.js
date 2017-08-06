import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  // this function renders a single city(row)
  renderWeather(cityData) {
    // returns an array of temps, pressures, and humidities for each
    const temperature = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => temp * (9 / 5) - 459.67); // _.map converts to fahrenheit
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const { lat, lon } = cityData.city.coord; // es6 syntax that looks for the coord object and assigns 2 variables with lat and lon

    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temperature} color="red" units="°F" /></td>
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
