import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SearchBar extends Component {
  render() {
    return (
      <Form.Field>
        <input placeholder="Search for a city..." />
        <Button type="submit" inverted color="green" size="mini">Submit</Button>
      </Form.Field>
    );
  }
}

export default SearchBar;
