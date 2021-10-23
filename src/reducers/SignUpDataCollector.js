import React from "react";
import { INPUT_DATA_COLLECTOR } from "../actions/actionTypes";

export const SignUpDataCollector = (state = {},{type,payload}) => {
  switch(type) {
    case INPUT_DATA_COLLECTOR:
      return state = {...state,...payload};
      default: return state
  }
};
