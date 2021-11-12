import {INPUT_DATA_COLLECTOR} from '../actions/actionTypes';

const initialState = {};

export const SignUpDataCollector = (state = initialState, {type, payload}) => {
  switch (type) {
    case INPUT_DATA_COLLECTOR:
      return (state = {...state, ...payload});
    default:
      return state;
  }
};
