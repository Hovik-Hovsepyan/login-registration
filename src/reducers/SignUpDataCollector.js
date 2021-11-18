import {INPUT_DATA_COLLECTOR} from '../actions/actionTypes';

const initialState = {
  firstPageData: {
    name: '',
    surname: '',
    username: '',
  },
};

export const SignUpDataCollector = (state = initialState, {type, payload}) => {
  switch (type) {
    case INPUT_DATA_COLLECTOR:
      return {
        ...state,
        firstPageData: {
          ...state.firstPageData,
          ...payload,
        },
      };
    default:
      return state;
  }
};
