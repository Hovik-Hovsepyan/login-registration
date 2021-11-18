import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import FlexHelpers from 'react-native-flex-helper';

import axios from 'axios';
import {baseUrl} from '../../constants/constants';
import {Colors} from '../../styles';
import AsyncStorageService from '../../services/asyncStorage/asyncStorage';

import AppButton from '../../components/ui/AppButton/AppButton';
import {isLoadingAction, isUserLoggedAction} from '../../actions/appActions';

const Homepage = () => {
  const logOutUrl = `${baseUrl}/auth/logout`;
  const dispatch = useDispatch();

  const logOut = async () => {
    dispatch(isLoadingAction(true));
    try {
      const token = await AsyncStorageService.getToken();
      const {data} = await axios.post(
        logOutUrl,
        {},
        {headers: {Authorization: `Bearer ${token}`}},
      );
      if (data?.status) {
        AsyncStorageService.removeToken().then(() => {
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
    <View style={styles.fillCenter}>
      <Text style={styles.txtStyle}>
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

const styles = FlexHelpers.create({
  signupBtnStyle: {
    backgroundColor: Colors.yellow,
  },
  txtStyle: {
    color: Colors.black,
  },
});

export default Homepage;
