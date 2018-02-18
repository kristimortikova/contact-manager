import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
import Location from './Location';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Location/>
        <Counter/>
        <p className="Google-link">
        This is <strong>link</strong>
        &nbsp;to&nbsp;
        <a href="https://www.google.ua">Google</a>

        </p>
      </div>
    );
  }
}

export default App;
