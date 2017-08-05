import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this); // this(SearchBar) has an onInputChange function, bind this function to the SearchBar and replace the existing function
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui main text container">
        <form className="ui form basic segment" onSubmit={this.onFormSubmit}>
            <div className="ui fluid action input">
              <input
                type="text"
                placeholder="Search for a city..."
                value={this.state.term}
                onChange={this.onInputChange} // whenever you pass a callback function(onInputChange) and the callback function has a reference to 'this', you need to bind the context
              />

              <button className="ui button">Search</button>
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
