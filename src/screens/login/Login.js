import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import LoginForm from "../../components/home/LoginForm/LoginForm";
import Logo from "../../components/home/Logo/Logo";
import axios from 'axios'
import { store } from "../../config/store";
import { useDispatch } from "react-redux";

const image = {uri:"https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}

const Login = () => {
  return(
    <View style={styles.loginContainer}>
      <ImageBackground style = {styles.loginBackground} source={image} >
        <Logo />
        <LoginForm />
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  loginContainer: {
    flex:1,
    backgroundColor: "black",
  },
  loginBackground: {
    flex: 1,
  }
});
export default Login;