import React, { useState } from "react";
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
import { inputDataCollector } from "../../actions/actions";
import { globalSelector } from "../../selectors/globalSelector";
import { baseUrl } from "../../constants/constants";
import PasswordShow from "../../components/home/PasswordShow/PasswordShow";

const image = {uri:"https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}
const signUpUrl = `${baseUrl}/auth/login`;
// JSON.stringify(response, undefined, 2)

const SignupFormSecond = () => {
  const navigation = useNavigation();
  const firstPageData = globalSelector();

  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [password_confirm,setPassword_confirm] = useState('');
  const [show,setShow] = useState('eye-off');
  
  const finishSignup = () => {
    const signUpData = {
      ...firstPageData,
      email,
      phone,
      password,
      password_confirm
    }
    
    axios
        .post(signUpUrl,signUpData,{
        }).then((response) => {
          console.log(JSON.stringify(response, undefined, 2));
        });
  };

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
          
          <Text>Phone</Text>
          <Input 
            onChangeText={phone => setPhone(phone)}
            placeholder = "Phone"
          />

          <View style={styles.passwordContainer}>
            {/* <Text>Password</Text> */}
            <Input 
              onChangeText={password => setPassword(password)}
              placeholder = "Password"
              secureTextEntry={show == 'eye-off' ? true : false}
            />
            <PasswordShow 
              size={30}
              passwordShowStyle={styles.passwordShowStyle}
              show={show}
              setShow={setShow}
            />
          </View>

          <View style={styles.passwordContainer}>     
            {/* <Text>Password confirm</Text> */}
            <Input 
              onChangeText={password_confirm => setPassword_confirm(password_confirm)}
              placeholder = "Confirm password"
              secureTextEntry={show == 'eye-off' ? true : false}
            />
            <PasswordShow 
              size={30}
              passwordShowStyle={styles.passwordShowStyle}
              show={show}
              setShow={setShow}
            />
          </View>

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
 
})


export default SignupFormSecond;