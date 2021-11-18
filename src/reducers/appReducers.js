import {IS_LOADING, USER_LOGGED} from '../actions/actionTypes';

const initialState = {
  isUserLogged: false,
  isLoading: false,
};

export const AppReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case USER_LOGGED: {
      return {
        ...state,
        isUserLogged: payload,
      };
    }

    case IS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }

    default: {
      return state;
    }
  }
};
