import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigatorHome, StackNavigatorRegistration } from "./navigation";
import  AsyncStorageService  from '../services/asyncStorage/asyncStorage';
import { useDispatch, useSelector } from 'react-redux';
import { userLogged } from '../actions/actions';
import {globalSelector} from '../selectors/globalSelector'
import {store} from '../config/store';
import { isUserLoggedAction } from '../actions/isUserLoggedAction';


export const AppNavigation = () => {


  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.UserLoggedReducer.isUserLogged);

  useEffect(()=> {
    AsyncStorageService.getData('token')
    .then((token) => {
      token && dispatch(isUserLoggedAction(true));
    })

  },[]);
  
  return(
    <NavigationContainer>
      {isLogged ? <StackNavigatorHome /> : <StackNavigatorRegistration />}
    </NavigationContainer>
  )
}
