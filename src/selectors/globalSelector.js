import { useSelector } from "react-redux";

export const globalSelector = (param) => {
  return useSelector(state => {
    if(param == undefined) {
      return state;
    } else {
      return state.param
    }
  });
}
