import React from 'react';
import {ImageBackground, View} from 'react-native';

import SignupFormFirst from '../singupformfirst/SignupFormFirst';
import GoBack from '../../components/GoBack/GoBack';
import {backgroundImage} from '../../constants/constants';
import FlexHelpers from 'react-native-flex-helper';
import {Colors} from '../../styles';

const SingUp = () => {
  return (
    <View style={styles.fill}>
      <ImageBackground style={styles.fill} source={{uri: backgroundImage}}>
        <GoBack size={30} color={Colors.white} backBtn={styles.backBtn} />
        <SignupFormFirst />
      </ImageBackground>
    </View>
  );
};

const styles = FlexHelpers.create({
  signupContainer: {
    backgroundColor: Colors.black,
  },
  leftBtn: {
    padding: 15,
  },
  backBtn: {
    padding: 15,
  },
});

export default SingUp;
