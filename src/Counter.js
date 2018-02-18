import React, { Component } from 'react';


export default class Counter extends Component {
  constructor(props){
    super(props);
    this.state={clicked:0};
    this.handleClick=this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({clicked: this.state.clicked+1});
  }
  render() {
    return  (
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <span className="counter">{this.state.clicked}</span>
        </p>);
  }
}