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
import Input from "../../components/ui/Input/Input";
import AppButton from "../../components/ui/AppButton/AppButton";
import { useNavigation } from '@react-navigation/native';

import { SIGNUPFORMSECOND_SCREEN } from "../../navigation/screenNames";
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from "react-redux";
import { inputDataCollector } from "../../actions/inputDataCollectorAction";

const SignupFormFirst = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [username,setUsername] = useState('');

  const next = () => {
    const firstPageData = {
      name,
      surname,
      username,
    }
    dispatch(inputDataCollector(firstPageData));
    navigation.navigate(SIGNUPFORMSECOND_SCREEN);
  };
  return(
    <View style={styles.container}>
      <Text>First name</Text>
      <Input 
        placeholder = "First name"
        onChangeText={name => setName(name)}
      />
      
      <Text>Last name</Text>
      <Input 
        placeholder = "Last name"
        onChangeText={surname => setSurname(surname)}
      />

      <Text>Username</Text>
      <Input 
        placeholder = "Username"
        onChangeText={username => setUsername(username)}
      />

      <AppButton 
        pressHandler = {next}
        btnStyle = {styles.btnStyle}
        btnText = "Next"
      />
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   btnStyle: {
    backgroundColor: "#34a7c7",
   },
  
})


export default SignupFormFirst;