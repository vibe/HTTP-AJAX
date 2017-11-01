import { FETCH_FRIENDS, ADD_FRIEND } from '../actions/types';

const friends = (state = [], action) => {
    switch(action.type) {
        case FETCH_FRIENDS:
            return [];
        case ADD_FRIEND:
            return [];
        default:
        return [];
    }
}

export default friends;