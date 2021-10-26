import { LOGIN_SCREEN } from "./screenNames";
import { HOMEPAGE_SCREEN } from "./screenNames";
import { SIGNUP_SCREEN } from "./screenNames";
import { SIGNUPFORMFIRST_SCREEN } from "./screenNames";
import { SIGNUPFORMSECOND_SCREEN } from "./screenNames";

import Login from '../screens/login/Login';
import Homepage from '../screens/homepage/Homepage';
import Signup from '../screens/signup/Signup'
import SignupFormSecond from '../screens/signupformsecond/SignupFormSecond';
import SignupFormFirst from "../screens/singupformfirst/SignupFormFirst";

export const navigationArr = 
[
  {
    name: LOGIN_SCREEN,
    component: Login,
  },

  {
    name: SIGNUP_SCREEN,
    component: Signup,
  },
  
  {
    name: SIGNUPFORMFIRST_SCREEN,
    component: SignupFormFirst ,
  },

  {
    name: SIGNUPFORMSECOND_SCREEN,
    component: SignupFormSecond,
  }
]

export const navigationHome = 
[
  {
    name: HOMEPAGE_SCREEN,
    component: Homepage,
  },

  // {
  //   name: SIGNUP_SCREEN,
  //   component: Signup,
  // },
  
]