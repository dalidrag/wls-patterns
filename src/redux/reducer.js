import {ADD_USERS} from './actionTypes';

const initialState = {
    users: null
};

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USERS:
            return Object.assign({}, state, {users: action.users});
        default:
            return state;
    }
}
