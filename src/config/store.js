import { combineReducers, createStore } from 'redux'
import { SignUpDataCollector } from '../reducers/SignUpDataCollector';
import { UserLoggedReducer } from '../reducers/UserLoggedReducer';

export const store = createStore(combineReducers({
  SignUpDataCollector,
  UserLoggedReducer,
}));