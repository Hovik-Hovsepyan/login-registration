import React from 'react';
import {Text, View} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';
import FastImage from 'react-native-fast-image';

import logoImg from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <View style={styles.fillCenter}>
      <FastImage source={logoImg} style={styles.logo} />
      <Text style={styles.logoText}>Բարլուս Ձեզ</Text>
    </View>
  );
};

const styles = FlexHelpers.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  logoText: {
    fontSize: 17,
    marginVertical: 10,
  },
});

export default Logo;
