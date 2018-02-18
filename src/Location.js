import React, { Component } from 'react';
export default class Location extends Component {
  render() {
    return ( <p className="App-pathname">
        you are at <i>{global.location.pathname}</i>
        </p>);
  }
}