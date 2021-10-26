import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import AppButton from "../../components/ui/AppButton/AppButton";
import AsyncStorageService from "../../services/asyncStorage/asyncStorage";
import { baseUrl } from "../../constants/constants";

import { isUserLoggedAction } from "../../actions/isUserLoggedAction";

const Homepage = () => {
  const logOutUrl = `${baseUrl}/auth/logout`;
  const dispatch = useDispatch();

  const logOut = () => {
    AsyncStorageService.getData('token')
      .then((response) => {
        try {
          axios
            .post(logOutUrl,{},{
              headers: {
                "Authorization" : `Bearer ${response}`
              }
            })
            .then((response) => {
              response?.data?.status && 
                AsyncStorageService.removeItem('token')
                  .then((response) => {
                    dispatch(isUserLoggedAction(false));
              })
            })
            .catch((err) => {
            })
    
        } catch (error) {
        }
      })
  };
  return(
    <View style={styles.container}>
      <Text style={{color:'black'}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <AppButton  
          btnText="Log out"
          pressHandler={logOut}
          btnStyle={styles.signupBtnStyle} 
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
  signupBtnStyle: {
    backgroundColor:'yellow'
  }
})


export default Homepage;