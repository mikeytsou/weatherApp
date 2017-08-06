import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchWeather } from '../actions/index';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
