import React, { Component } from 'react';

class GoogleMap extends Component {
  // life-cyle methods prefixed with 'will' are called right before something happens, and methods prefixed with 'did' are called right after something happens
  // componentDidMount gets called automatically after this component gets rendered
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // ref allows us to get a direct reference to an html element that has been rendered to a page
    // this.refs.map is available to use throughout this component and is a direct reference to this div element
    return <div ref="map" />;
  }
}

export default GoogleMap;
