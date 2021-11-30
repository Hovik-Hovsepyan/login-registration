import React, {useCallback, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import axios from 'axios';
import AsyncStorageService from '../../services/asyncStorage/asyncStorage';

import {passwordChecker} from '../../helpers/validation';
import Input from '../ui/Input/Input';
import {baseUrl} from '../../constants/constants';
import {SIGNUP_SCREEN} from '../../navigation/screenNames';
import {isLoadingAction, isUserLoggedAction} from '../../actions/appActions';
import AppButton from '../ui/AppButton/AppButton';
import FlexHelpers from 'react-native-flex-helper';
import {Colors} from '../../styles';

const loginUrl = `${baseUrl}/auth/login`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const [show] = useState('eye-off');
  const [passwordValidation, setPasswordValidation] = useState('');

  const login = useCallback(async () => {
    const loginData = {
      username: usernameRef.current,
      password: passwordRef.current,
    };
    setPasswordValidation(passwordChecker(passwordRef.current));

    if (passwordChecker(passwordRef.current) === true) {
      dispatch(isLoadingAction(true));
      try {
        const {data} = await axios.post(loginUrl, loginData, {});
        if (data?.status) {
          AsyncStorageService.setToken(data?.token?.access_token).then(() => {
            dispatch(isUserLoggedAction(true));
            dispatch(isLoadingAction(false));
          });
        } else {
          // alert('invalid log pass!')
        }
      } catch (err) {
        dispatch(isLoadingAction(false));
        !err?.response?.data?.status
          ? setPasswordValidation('Invalid username or password')
          : setPasswordValidation('');
      }
    }
  }, [dispatch, usernameRef]);

  const signUp = useCallback(() => {
    navigation.navigate(SIGNUP_SCREEN);
  }, [navigation]);

  return (
    <View style={styles.fillCenter}>
      <Input placeholder="Email or Username" changeRef={usernameRef} />

      <View style={[styles.rowCenter, styles.passwordContainer]}>
        <Input
          placeholder="Password"
          changeRef={passwordRef}
          secureTextEntry={show}
          inpStyle={styles.inpStyle}
          isPassword={true}
        />
      </View>

      <Text style={styles.errMsg}>{passwordValidation}</Text>

      <View style={styles.rowCross}>
        <AppButton
          btnText="Login"
          pressHandler={login}
          btnStyle={styles.loginBtnStyle}
        />
        <Text style={styles.txt}>or</Text>
        <AppButton
          btnText="Sign up"
          pressHandler={signUp}
          btnStyle={styles.signupBtnStyle}
        />
      </View>
    </View>
  );
};

const styles = FlexHelpers.create({
  loginBtnStyle: {
    backgroundColor: Colors.lightBlue,
  },
  signupBtnStyle: {
    backgroundColor: Colors.darkBlue,
  },
  txt: {
    fontSize: 17,
    fontWeight: '900',
  },
  passwordContainer: {
    marginLeft: 30,
  },
  passwordShowStyle: {
    right: 40,
    color: Colors.black,
  },
  errMsg: {
    color: Colors.red,
  },
});

export default LoginForm;
