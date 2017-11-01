import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from '../actions/index';

class FriendsApp extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.fetchFriends());
    }
    render() {
        return (
            <div className="friends">
                friends
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
        addFriend: () => dispatch(addFriend())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FriendsApp);