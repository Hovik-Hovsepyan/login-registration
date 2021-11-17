import React, {useCallback, useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';
import AsyncStorageService from '../../services/asyncStorage/asyncStorage';

import {backgroundImage, baseUrl} from '../../constants/constants';

import {isLoadingAction} from '../../actions/isLoadingAction';
import {isUserLoggedAction} from '../../actions/isUserLoggedAction';

import {
  emailChecker,
  passwordChecker,
  passwordsMatchChecker,
} from '../../helpers/validation';

import Input from '../../components/ui/Input/Input';
import GoBack from '../../components/GoBack/GoBack';
import AppButton from '../../components/ui/AppButton/AppButton';
import PasswordShow from '../../components/PasswordShow/PasswordShow';
import FlexHelpers from 'react-native-flex-helper';
import {Colors} from '../../styles';

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
          await AsyncStorageService.setToken(data?.token?.access_token);
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
    <View style={styles.fill}>
      <ImageBackground style={styles.fill} source={{uri: backgroundImage}}>
        <GoBack size={30} color={Colors.white} backBtn={styles.backBtn} />
        <View style={styles.fillCenter}>
          <Text>Email</Text>
          <Input onChangeText={setEmail} placeholder="Email" />
          <Text style={styles.errMsg}>{emailValidation}</Text>

          <Text>Phone</Text>
          <Input onChangeText={setPhone} placeholder="Phone" />

          <Text>Password</Text>
          <View style={[styles.rowCenter, styles.passwordContainer]}>
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
          <View style={[styles.rowCenter, styles.passwordContainer]}>
            <Input
              onChangeText={setPassword_confirm}
              placeholder="Confirm password"
              secureTextEntry={show}
            />
            <PasswordShow
              size={30}
              passwordShowStyle={[styles.relative, styles.passwordShowStyle]}
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

const styles = FlexHelpers.create({
  btnStyle: {
    backgroundColor: Colors.darkBlue,
  },
  backBtn: {
    padding: 15,
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

export default SignupFormSecond;
