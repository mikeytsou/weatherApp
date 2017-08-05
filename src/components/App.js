import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';


class App extends Component {
  render() {
    return (
      <div id="main-container" className="ui container">
        <div className="column">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
