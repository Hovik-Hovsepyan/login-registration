import React from "react";
import { IS_LOADING } from "../actions/actionTypes";

const initialState = false;

export const IsLoadingReducer = (state = initialState,{ type,payload }) => {
  switch(type) {
    case IS_LOADING:
      return state = payload;
      default: return state
  }
};
