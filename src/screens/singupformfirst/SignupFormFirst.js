import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";

import Input from "../../components/ui/Input/Input";
import AppButton from "../../components/ui/AppButton/AppButton";

import { SIGNUPFORMSECOND_SCREEN } from "../../navigation/screenNames";
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
    };
    dispatch(inputDataCollector(firstPageData));
    navigation.navigate(SIGNUPFORMSECOND_SCREEN);
  };

  return(
    <View style={styles.container}>
      <Text>First name</Text>
      <Input 
        placeholder="First name"
        onChangeText={setName}
      />
      
      <Text>Last name</Text>
      <Input 
        placeholder="Last name"
        onChangeText={setSurname}
      />

      <Text>Username</Text>
      <Input 
        placeholder="Username"
        onChangeText={setUsername}
      />

      <AppButton 
        pressHandler={next}
        btnStyle={styles.btnStyle}
        btnText="Next"
      />
    </View>
  );
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
});

export default SignupFormFirst;
