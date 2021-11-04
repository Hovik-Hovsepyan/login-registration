import { combineReducers, createStore } from 'redux'
import { SignUpDataCollector } from '../reducers/SignUpDataCollector';
import { UserLoggedReducer } from '../reducers/UserLoggedReducer';
import { IsLoadingReducer } from '../reducers/IsLoadingReducer';

export const store = createStore(combineReducers({
  SignUpDataCollector,
  UserLoggedReducer,
  IsLoadingReducer,
}));