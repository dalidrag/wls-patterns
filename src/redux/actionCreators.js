import {ADD_USERS} from './actionTypes';

export function fetchUsers(data) {
    return {
        type: ADD_USERS,
        users: data
    }
}