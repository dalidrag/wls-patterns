import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {usersReducer} from './reducer';

const store = createStore(usersReducer, applyMiddleware(thunk, createLogger()));

export default store;
