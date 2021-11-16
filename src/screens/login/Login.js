import React from 'react';
import {ImageBackground, View} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import {backgroundImage} from '../../constants/constants';

const Login = () => {
  return (
    <View style={[styles.fill, styles.loginContainer]}>
      <ImageBackground style={styles.fill} source={{uri: backgroundImage}}>
        <Logo />
        <LoginForm />
      </ImageBackground>
    </View>
  );
};

const styles = FlexHelpers.create({
  loginContainer: {
    backgroundColor: 'black',
  },
});

export default Login;
