import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
import Location from './Location';
import Contacts from './Contacts';



class App extends Component {
  render() {
    const path = global.location.pathname;
    return (
      <div className="App">
        <Location/>
        {path==='/counter'?<Counter/>:null}
        {path==='/contacts'?<Contacts/>:null}
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
