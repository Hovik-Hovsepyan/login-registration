import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import axios from 'axios';
import {baseUrl} from '../../constants/constants';

import AsyncStorageService from '../../services/asyncStorage/asyncStorage';

import {isLoadingAction} from '../../actions/isLoadingAction';
import {isUserLoggedAction} from '../../actions/isUserLoggedAction';

import AppButton from '../../components/ui/AppButton/AppButton';

const Homepage = () => {
  const logOutUrl = `${baseUrl}/auth/logout`;
  const dispatch = useDispatch();

  const logOut = async () => {
    dispatch(isLoadingAction(true));
    const token = await AsyncStorageService.getData('token');
    try {
      const {data} = await axios.post(
        logOutUrl,
        {},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      if (data?.status) {
        AsyncStorageService.removeItem('token').then(() => {
          dispatch(isUserLoggedAction(false));
          dispatch(isLoadingAction(false));
        });
      } else {
        ///err
      }
    } catch (error) {
      dispatch(isLoadingAction(false));
      ///err
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Text>
      <AppButton
        btnText="Log out"
        pressHandler={logOut}
        btnStyle={styles.signupBtnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBtnStyle: {
    backgroundColor: 'yellow',
  },
});

export default Homepage;
