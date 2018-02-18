import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={clicked:0};
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({clicked: this.state.clicked+1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-pathname">
        you are at <i>{global.location.pathname}</i>
        </p>
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <span className="counter">{this.state.clicked}</span>
        </p>
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
