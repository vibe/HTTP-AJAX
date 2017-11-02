import axios from 'axios';
import { FETCH_FRIENDS, ADD_FRIEND, REMOVE_FRIEND, UPDATE_FRIEND } from './types';

const serverURL = 'http://localhost:5000';

export const fetchFriends = () => {
    const promise = axios.get(`${serverURL}/friends`);
    return {
        type: FETCH_FRIENDS,
        payload: promise
    }
}

export const addFriend = (friend) => {
    console.log(friend);
    const promise = axios.post(`${serverURL}/new-friend`, friend);
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}

export const removeFriend = (id) => {
    console.log(id);
    const promise = axios.delete(`${serverURL}/delete-friend`, { index: id});
    return {
        type: REMOVE_FRIEND,
        payload: promise
    }
}

export const updateFriend = (friend) => {
    const promise  = axios.put(`${serverURL}/update-friend`, friend);
    return {
        type: UPDATE_FRIEND,
        payload: promise
    }
}