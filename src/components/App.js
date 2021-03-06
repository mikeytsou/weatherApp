import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';


class App extends Component {
  render() {
    return (
      <div className="ui main container">
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

export default App;
