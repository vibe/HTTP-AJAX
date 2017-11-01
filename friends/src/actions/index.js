import axios from 'axios';
import { FETCH_FRIENDS, ADD_FRIEND } from './types';

const serverURL = 'http://localhost:5000';

export const fetchFriends = () => {
    const friends = axios.get(`${serverURL}/friends`);
    return {
        type: FETCH_FRIENDS,
        payload: {
            friends
        }
    }
}

export const addFriend = (friend) => {
    const friends = axiox.post(`${serverURL}/new-friend`, friend);
    return {
        type: ADD_FRIEND,
        payload: {
            friends
        }
    }
}