import React, { Component } from 'react';

class FriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name || '',
            age: this.props.age || '',
            email: this.props.email || ''
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
        const { type = 'add', cancel=()=>{} } = this.props;
        return (
            <div className={`friend-form-${type}`}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} required={true} />
                    <input type="number" placeholder="age" value={this.state.age} onChange={(e) => this.handleChange(e, 'age')} required={true} />
                    <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')} required={true} />
                    <button type="submit">{type === 'update' ? 'Update' : 'Add'} Friend</button>
                    { type === 'update' ? <button type="button" onClick={cancel}>cancel</button> : null }
                </form>
            </div>
        )
    }
}

export default FriendForm;