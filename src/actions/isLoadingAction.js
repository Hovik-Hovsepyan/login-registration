import {IS_LOADING} from './actionTypes';

export const isLoadingAction = payload => {
  return {
    type: IS_LOADING,
    payload,
  };
};
