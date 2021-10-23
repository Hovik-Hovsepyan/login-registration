import { createStore } from 'redux'
import { SignUpDataCollector } from '../reducers/SignUpDataCollector';

export const store = createStore(SignUpDataCollector);