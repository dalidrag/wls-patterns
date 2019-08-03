import {ADD_USERS} from './actionTypes';
import {SERVER, FETCH_USERS} from '../config/api';

export const fetchUsers = () => (dispatch) => {
    fetch(`${SERVER}${FETCH_USERS}`) // eslint-disable-line
        .then(function(response) {
            return response.json();
        })
        .then(function(users) {
            dispatch(addUsers(users));
        });
};

function addUsers(data) {
    return {
        type: ADD_USERS,
        users: data
    }
}
