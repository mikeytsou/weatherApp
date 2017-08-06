import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class WeatherList extends Component {
  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>City</th>
          </tr>
        </thead>

        <tbody>

        </tbody>
      </table>
    );
  }
}


export default WeatherList;