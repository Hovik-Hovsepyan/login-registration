import {combineReducers, createStore} from 'redux';
import {combinedReducers} from '../reducers';

export const store = createStore(combineReducers(combinedReducers));
