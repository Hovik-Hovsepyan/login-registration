import {SET_CONTACTS} from '../actions/actionTypes';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: payload,
      };
    default:
      return state;
  }
};
