import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  // this function renders a single city(row)
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperature = cityData.list.map((weather) => weather.main.temp);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);


    return (
      <tr key={name}>
        <td>{name}</td>

        <td><Chart data={temperature} color="orange" /></td>

        <td><Chart data={pressure} color="blue" /></td>

        <td><Chart data={humidity} color="green" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="four wide">City</th>
            <th className="four wide">Temperature</th>
            <th className="four wide">Pressure</th>
            <th className="four wide">Humidity</th>
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
