import { FETCH_FRIENDS, ADD_FRIEND, REMOVE_FRIEND, UPDATE_FRIEND } from '../actions/types';

const friends = (state = [], action) => {
    switch(action.type) {
        case FETCH_FRIENDS:
        case ADD_FRIEND:
        case REMOVE_FRIEND: 
        case UPDATE_FRIEND:
            return action.payload.data;
        default:
        return [];
    }
}

export default friends;