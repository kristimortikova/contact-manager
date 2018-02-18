import React, { Component } from 'react';
class ContactForm extends Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			email:'',
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	handleChange(event){
		console.log(event.target.name, event.target.value);
		this.setState({
			[event.target.name]:event.target.value,
		})
	}
	handleClick(event){
		event.preventDefault();
		this.setState({name:'', email:'',});
	}	
	render(){
		console.log(this.state);
		return(<form onChange = {this.handleChange}>
    		<div>Name <input name = 'name' value={this.state.name}/></div>
    		<div>Email<input name = 'email' value={this.state.email}/></div>
    		<button onClick={this.handleClick}> add </button>
    	</form> );
	}
}

export default class Contacts extends Component{
  render(){
    return (
    	<div className = 'App'>
    	<h2> Contact list</h2>
    	<ContactForm/>
    	</div>);
  }
}