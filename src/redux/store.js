import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {usersReducer} from './reducer';

const store = createStore(usersReducer, applyMiddleware(createLogger()));

export default store;
