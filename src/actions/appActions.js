import {IS_LOADING, USER_LOGGED} from './actionTypes';

export const isLoadingAction = payload => {
  return {
    type: IS_LOADING,
    payload,
  };
};

export const isUserLoggedAction = payload => {
  return {
    type: USER_LOGGED,
    payload,
  };
};
