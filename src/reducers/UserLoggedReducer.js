import { USER_LOGGED } from "../actions/actionTypes";

const initialState = {
  isUserLogged: false,
};

export const UserLoggedReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_LOGGED: {
      return {
        ...state,
        isUserLogged: payload,
      };
    }
    default: {
      return state;
    };
  }
};
