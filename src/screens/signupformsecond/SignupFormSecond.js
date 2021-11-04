import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import Input from "../../components/ui/Input/Input";
import AppButton from "../../components/ui/AppButton/AppButton";

import { useNavigation } from '@react-navigation/native';

import { LOGIN_SCREEN } from "../../navigation/screenNames";
import GoBack from "../../components/home/GoBack/GoBack";

import axios from 'axios'
import { store } from "../../config/store";
import { useDispatch, useSelector } from "react-redux";
// import { inputDataCollector } from "../../actions/actions";
import { globalSelector } from "../../selectors/globalSelector";
import { baseUrl } from "../../constants/constants";
import PasswordShow from "../../components/home/PasswordShow/PasswordShow";
import { UserLoggedReducer } from "../../reducers/UserLoggedReducer";
import { isUserLoggedAction } from "../../actions/isUserLoggedAction";
import  AsyncStorageService  from "../../services/asyncStorage/asyncStorage";
import { validateEmail } from "../../services/emailValidation/emailValidation";
import { emailChecker, emailValidation, passwordChecker, passwordConfirmChecker, passwordValidation } from "../../helpers/validation";
import { isLoadingAction } from "../../actions/isLoadingAction";

const image = {uri:"https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}
const signUpUrl = `${baseUrl}/auth/register`;
// console.log(JSON.stringify(response, undefined, 2))

const SignupFormSecond = () => {
  const navigation = useNavigation();
  const firstPageData = globalSelector();
  const dispatch = useDispatch()

  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [password_confirm,setPassword_confirm] = useState('');
  const [show,setShow] = useState('eye-off');
  const [showConfirm,setShowConfirm] = useState('eye-off');
  const [emailValidation,setEmailValidation] = useState('');
  const [passwordValidation,setPasswordValidation] = useState('');
  const [passwordConfirmValidation,setPasswordConfirmValidation] = useState('');
  
  const finishSignup = () => {
    const signUpData = {
      ...firstPageData.SignUpDataCollector,
      email,
      phone,
      password,
      password_confirm
    }

    setEmailValidation(emailChecker(email));
    setPasswordValidation(passwordChecker(password));
    setPasswordConfirmValidation(passwordChecker(password,password_confirm));

    if(emailChecker(email) === true && passwordChecker(password,password_confirm) === true) {
      try {
        dispatch(isLoadingAction(true))
        axios
          .post(signUpUrl,signUpData,{})
          .then((response) => {
            if(response?.data?.status) {
              AsyncStorageService.setData('token',response?.data?.token?.access_token)
              .then((response) => {
                dispatch(isUserLoggedAction(true));
                dispatch(isLoadingAction(false))
              })
              .catch((err) => {
                !err?.response?.data?.status ?  setPasswordConfirmValidation("Email or password is incorrect") : setPasswordConfirmValidation('');  
              })
            } else {
              for(let error in response?.data?.errors) {
                let errMsg = `${error} is already in use `
                setPasswordConfirmValidation(errMsg) 
              }
            }
          });
      } catch (error) {
        console.log(error);
        }
    }
  }
    
  return(
    <View style={styles.container}>
      <ImageBackground style={styles.signupBackground} source={image} >
        <GoBack 
          size={30}
          color="white"
          backBtn={styles.backBtn}
        />
        <View style={styles.fields}>
          <Text>Email</Text>
          <Input 
            onChangeText={email => setEmail(email)}
            placeholder = "Email"
          />
          <Text style={styles.errMsg}>{emailValidation}</Text>

          <Text>Phone</Text>
          <Input 
            onChangeText={phone => setPhone(phone)}
            placeholder = "Phone"
          />

          <Text>Password</Text>
          <View style={styles.passwordContainer}>
            <Input 
              onChangeText={password => setPassword(password)}
              placeholder = "Password"
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
              onChangeText={password_confirm => setPassword_confirm(password_confirm)}
              placeholder = "Confirm password"
              secureTextEntry={show}
            />
            <PasswordShow 
              size={30}
              passwordShowStyle={styles.passwordShowStyle}
              show={show}
              setShow={setShow}
            />
          </View>

          <Text style={styles.errMsg}>{passwordConfirmValidation}</Text>

        <AppButton
          pressHandler = {finishSignup}
          btnStyle = {styles.btnStyle}
          btnText = "Sign up"
        />
        </View>
      </ImageBackground>
    </View>
  )
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
    backgroundColor:'#153e9f',
  },
  backBtn: {
    padding:15
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
  },
 
})


export default SignupFormSecond;