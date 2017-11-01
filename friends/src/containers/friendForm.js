import React, { Component } from 'react';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    handleChange = (e, field) => {
        const value = e.target.value;
        this.setState({
            [field]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {name, age, email} = this.state;
        if(name && age && email) {
            this.props.onSubmit({
                name, age, email
            })
        }
    }
    render() {
        return (
            <div className="friend-form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} required={true}/>
                    <input type="number" placeholder="age" value={this.state.age} onChange={(e) => this.handleChange(e, 'age')} required={true}/>
                    <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} required={true}/>
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendForm;