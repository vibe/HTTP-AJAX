import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendsForm from './friendForm';
import Friends from '../components/friends';

import { fetchFriends, addFriend, removeFriend, updateFriend } from '../actions/index';

class FriendsApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.fetchFriends()
    }
    render() {
        return (
            <div className="friends">
                <FriendsForm type="add" onSubmit={this.props.addFriend}/>
                <Friends friends={this.props.friends} removeFriend={this.props.removeFriend} updateFriend={this.props.updateFriend}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    friends: state.friends
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFriends: () => dispatch(fetchFriends()),
        addFriend: (friend) => dispatch(addFriend(friend)),
        removeFriend: (id) => dispatch(removeFriend(id)),
        updateFriend: (friend) => dispatch(updateFriend(friend))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsApp);