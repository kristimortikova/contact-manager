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
		this.setState({
			[event.target.name]:event.target.value,
		})
	}
	handleClick(event){
		event.preventDefault();
		this.props.onAdd(this.state)
		this.setState({name:'', email:'',});
	}	
	render(){
		return(<form onChange={this.handleChange}>
    		<div>Name <input name='name' value={this.state.name}/></div>
    		<div>Email<input name='email' value={this.state.email}/></div>
    		<button id="add" onClick={this.handleClick}> add </button>
    	</form> );
	}
}
class Contact extends Component{
	render(){
		return (
    		<div className='Contact'>
    			<div className='Contact-name'>{this.props.name}</div> 
    			<div className='Contact-email'>{this.props.email}</div>
    		</div>);
	}
}

export default class Contacts extends Component{
	constructor(props){
		super(props);
		this.state={
			contacts:[]
		};
		this.handleAdd=this.handleAdd.bind(this);
	}
	handleAdd(contact){
		this.setState({
			contacts:[...this.state.contacts, contact]
		});
		
	}

  	render(){
    	return (
    		<div className='App-contacts'>
    			<h2> Contact list</h2>
    			<ContactForm onAdd={this.handleAdd}/>
    			{this.state.contacts.map(function(contact,key){
    				return (<Contact key={key} name={contact.name} email={contact.email}/>);
    			})}
    		</div>);
  	}
}