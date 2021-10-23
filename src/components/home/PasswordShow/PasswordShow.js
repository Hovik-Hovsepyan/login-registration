import React,  { useCallback, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

const PasswordShow = ({size,color,passwordShowStyle,show,setShow}) => {
  const showHide = () => {
    show == "eye-off" ? setShow('eye') : setShow('eye-off')
  };

  return (
      <Icon
        name={show} 
        size={size} 
        color={color} 
        style={passwordShowStyle} 
        onPress={showHide} 
      />
  )
};

export default PasswordShow;