import React, {useCallback, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';
import AsyncStorageService from '../../services/asyncStorage/asyncStorage';

import {baseUrl} from '../../constants/constants';

import {isLoadingAction} from '../../actions/isLoadingAction';
import {isUserLoggedAction} from '../../actions/isUserLoggedAction';

import {
  emailChecker,
  passwordChecker,
  passwordsMatchChecker,
} from '../../helpers/validation';

import Input from '../../components/ui/Input/Input';
import GoBack from '../../components/home/GoBack/GoBack';
import AppButton from '../../components/ui/AppButton/AppButton';
import PasswordShow from '../../components/home/PasswordShow/PasswordShow';

const image = {
  uri: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
};
const signUpUrl = `${baseUrl}/auth/register`;

const SignupFormSecond = () => {
  const firstPageData = useSelector(state => state.SignUpDataCollector);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPassword_confirm] = useState('');
  const [show, setShow] = useState('eye-off');
  const [showConfirm, setShowConfirm] = useState('eye-off');
  const [emailValidation, setEmailValidation] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [passwordsMatchValidation, setPasswordsMatchValidation] = useState('');
  const [signupErr, setSignupErr] = useState('');

  const finishSignup = useCallback(async () => {
    const signUpData = {
      ...firstPageData,
      email,
      phone,
      password,
      password_confirm,
    };

    setEmailValidation(emailChecker(email));
    setPasswordValidation(passwordChecker(password));
    setPasswordsMatchValidation(
      passwordsMatchChecker(password, password_confirm),
    );

    if (
      emailChecker(email) === true &&
      passwordChecker(password) === true &&
      passwordsMatchChecker(password, password_confirm) === true
    ) {
      try {
        dispatch(isLoadingAction(true));
        const {data} = await axios.post(signUpUrl, signUpData, {});
        if (data?.status) {
          await AsyncStorageService.setData('token', data?.token?.access_token);
          dispatch(isLoadingAction(false));
          dispatch(isUserLoggedAction(true));
        } else {
          dispatch(isLoadingAction(false));
          setSignupErr('User is already registered');
        }
      } catch (error) {
        dispatch(isLoadingAction(false));
      }
    }
  }, [dispatch, email, firstPageData, password, password_confirm, phone]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.signupBackground} source={image}>
        <GoBack size={30} color="white" backBtn={styles.backBtn} />
        <View style={styles.fields}>
          <Text>Email</Text>
          <Input onChangeText={setEmail} placeholder="Email" />
          <Text style={styles.errMsg}>{emailValidation}</Text>

          <Text>Phone</Text>
          <Input onChangeText={setPhone} placeholder="Phone" />

          <Text>Password</Text>
          <View style={styles.passwordContainer}>
            <Input
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={showConfirm}
            />
            <PasswordShow
              size={30}
              passwordShowStyle={styles.passwordShowStyle}
              show={showConfirm}
              setShow={setShowConfirm}
            />
          </View>
          <Text style={styles.errMsg}>{passwordValidation}</Text>

          <Text>Password confirm</Text>
          <View style={styles.passwordContainer}>
            <Input
              onChangeText={setPassword_confirm}
              placeholder="Confirm password"
              secureTextEntry={show}
            />
            <PasswordShow
              size={30}
              passwordShowStyle={styles.passwordShowStyle}
              show={show}
              setShow={setShow}
            />
          </View>
          <Text style={styles.errMsg}>
            {signupErr ? signupErr : passwordsMatchValidation}
          </Text>
          <AppButton
            pressHandler={finishSignup}
            btnStyle={styles.btnStyle}
            btnText="Sign up"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fields: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBackground: {
    flex: 1,
  },
  btnStyle: {
    backgroundColor: '#153e9f',
  },
  backBtn: {
    padding: 15,
  },
  passwordContainer: {
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordShowStyle: {
    position: 'relative',
    right: 40,
    color: 'black',
  },
  errMsg: {
    color: '#ed2b2b',
  },
});

export default SignupFormSecond;
