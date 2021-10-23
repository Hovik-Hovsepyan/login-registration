import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import Input from "../../ui/Input/Input";
import AppButton from "../../ui/AppButton/AppButton";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { inputDataCollector } from "../../../actions/actions";
import axios from "axios";
import { baseUrl } from "../../../constants/constants";

import { HOMEPAGE_SCREEN, SIGNUP_SCREEN } from "../../../navigation/screenNames";
import { store } from "../../../config/store";
import { Icon } from "react-native-vector-icons/AntDesign";
import PasswordShow from "../PasswordShow/PasswordShow";

const loginUrl = `${baseUrl}/auth/login`;

const LoginForm = () => {

  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [show,setShow] = useState('eye-off');

  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const login = () => {
    const loginData = {
      username,
      password,
    };

    axios
        .post(loginUrl,loginData,{})
        .then((response) => {
          console.log(JSON.stringify(response, undefined, 2));
        });

    navigation.navigate(HOMEPAGE_SCREEN);
  };
  const signUp = () => {
    navigation.navigate(SIGNUP_SCREEN);
  }
  
  return(
    <View style={styles.container}>
      <Input
        placeholder = "Email or Username"
        onChangeText={username => setUsername(username)}
      />

      <View style={styles.passwordContainer}>
        <Input
          placeholder = "Password" 
          onChangeText={password => setPassword(password)}
          secureTextEntry={show}
          inpStyle={styles.inpStyle}
        />
        <PasswordShow 
          size={30}
          passwordShowStyle={styles.passwordShowStyle}
          show={show}
          setShow={setShow}
        />
      </View>
        
      <View style={styles.btnsContainer}>
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
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnsContainer: {
    flexDirection: "row",
    alignItems:"center",
  },  
  loginBtnStyle: {
    backgroundColor: "#34a7c7",
  },
  signupBtnStyle: {
    backgroundColor:'#153e9f',
  },
  txt: {
    fontSize: 17,
    fontWeight: "900"
  },
  passwordContainer : {
    marginLeft: 30,
    flexDirection:'row',
    justifyContent: "center" ,
    alignItems: 'center',
  },
  passwordShowStyle: {
    position:"relative",
    right: 40,
    color: "black",
  },
})


export default LoginForm;