import React, { Component } from 'react';
import FriendForm from '../containers/friendForm';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    toggleEdit = () => {
        this.setState({
            editing: !this.state.editing
        })
    }
    updateFriend = (friend) => {
        this.props.updateFriend(friend);
        this.toggleEdit();
    }
    render() {
        const {name, age, email, removeFriend} = this.props;
        const { editing } = this.state;
        return (
            <li>
                { !editing ? <div className="details">
                    <span className="name">{name}</span>
                    <span className="age">{age}</span>
                    <span className="email">{email}</span>
                    <button onClick={removeFriend}>remove</button>
                    <button onClick={this.toggleEdit}>Edit</button>
        </div> : <FriendForm type="update" onSubmit={this.updateFriend} name={name} age={age} email={email} cancel={this.toggleEdit}/> }
            </li>
        )
    }
}


// export default ({name, age, email, removeFriend, editFriend}) => {
//     const test = true;
//     return test ? (
//         <li>
//             <span className="name">{name}</span>
//             <span className="age">{age}</span>
//             <span className="email">{email}</span>
//             <button onClick={removeFriend}>remove</button>
//             <button onClick={(e)}>Edit</button>
//         </li>