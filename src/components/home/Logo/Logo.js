import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Logo = () => {
  return(
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../images/logo.png')} />
      <Text style={styles.logoText}>Բարլուս Ձեզ</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 15,
  },
  logoText: {
    fontSize: 17,
    marginVertical: 10,
  }
})


export default Logo;