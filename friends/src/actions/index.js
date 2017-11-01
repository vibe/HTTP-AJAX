import axios from 'axios';
import { FETCH_FRIENDS, ADD_FRIEND } from './types';

const serverURL = 'http://localhost:5000';

export const fetchFriends = () => {
    const promise = axios.get(`${serverURL}/friends`);
    console.log(promise);
    return {
        type: FETCH_FRIENDS,
        payload: promise
    }
}

export const addFriend = (friend) => {
    const promise = axios.post(`${serverURL}/new-friend`, friend);
    return {
        type: ADD_FRIEND,
        payload: promise
    }
}