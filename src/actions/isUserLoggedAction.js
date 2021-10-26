import { USER_LOGGED } from "./actionTypes";

export const isUserLoggedAction = (payload) => {
  return {
    type: USER_LOGGED,
    payload, 
  }
}
