import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {StackNavigatorHome, StackNavigatorRegistration} from './navigation';

import AsyncStorageService from '../services/asyncStorage/asyncStorage';

import {isUserLoggedAction} from '../actions/isUserLoggedAction';

export const AppNavigation = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.UserLoggedReducer.isUserLogged);

  useEffect(() => {
    AsyncStorageService.getToken().then(token => {
      if (token) {
        dispatch(isUserLoggedAction(true));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLogged ? <StackNavigatorHome /> : <StackNavigatorRegistration />}
    </NavigationContainer>
  );
};
