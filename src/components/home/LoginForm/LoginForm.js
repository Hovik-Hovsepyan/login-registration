import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import Input from "../../ui/Input/Input";
import AppButton from "../../ui/AppButton/AppButton";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../../constants/constants";

import { HOMEPAGE_SCREEN, SIGNUP_SCREEN } from "../../../navigation/screenNames";
import { store } from "../../../config/store";
import { Icon } from "react-native-vector-icons/AntDesign";
import PasswordShow from "../PasswordShow/PasswordShow";
import AsyncStorageService from "../../../services/asyncStorage/asyncStorage";
import { isUserLoggedAction } from "../../../actions/isUserLoggedAction";
import { passwordChecker } from "../../../helpers/validation";

const loginUrl = `${baseUrl}/auth/login`;

const LoginForm = () => {

  const [username,setUsername] = useState();
  const [password,setPassword] = useState();
  const [show,setShow] = useState('eye-off');
  const [errorMsg,setErrorMsg] = useState('');
  const [passwordValidation,setPasswordValidation] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login = () => {
    const loginData = {
      username,
      password,
    };

    setPasswordValidation(passwordChecker(password));

  if(passwordChecker(password) === true) {
      try {
        axios
            .post(loginUrl,loginData,{})
            .then((response) => {
              if(response?.data?.status) {
                AsyncStorageService.setData('token',response?.data?.token?.access_token)
                  .then(() => {
                    dispatch(isUserLoggedAction(true));
                  })
              } else{
                // alert('invalid log pass!')
              }
            })
            .catch((err) => {
              !err?.response?.data?.status ?  setPasswordValidation("Invalid username or password") : setPasswordValidation('');  
            })
      } catch (error) {
        console.log(error);
      }
  }

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

      <Text style={styles.errMsg}>{passwordValidation}</Text>

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
  errMsg: {
    color: "#ed2b2b"
  }
})


export default LoginForm;