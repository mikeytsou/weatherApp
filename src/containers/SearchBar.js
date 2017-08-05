import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

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
      <Form>
        <Form.Group>
          <Form.Input
            width={6}
            placeholder="Search for a city"
            value={this.state.term}
            onChange={this.onInputChange} // whenever you pass a callback function(onInputChange) and the callback function has a reference to 'this', you need to bind the context
          />
          <Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;

// <form className="ui form" onSubmit={this.onFormSubmit}>
//   <div className="fields">
//     <div className="six wide field">
//       <input
//         type="text"
//         placeholder="Search for a city..."
//         value={this.state.term}
//         onChange={this.onInputChange} // whenever you pass a callback function(onInputChange) and the callback function has a reference to 'this', you need to bind the context
//       />
//     </div>
//       <input
//         type="submit"
//         className="ui inverted green button"
//       />
//   </div>
// </form>
