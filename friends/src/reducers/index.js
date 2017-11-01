import { combineReducers } from 'redux';
import FriendsReducer from './friends';

const reducers = combineReducers({
    friends: FriendsReducer
});

export default reducers;