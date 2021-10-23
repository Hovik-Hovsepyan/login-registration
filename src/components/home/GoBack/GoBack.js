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

import Icon from 'react-native-vector-icons/AntDesign';


const GoBack = ({size,color,backBtn}) => {
  const navigation = useNavigation();
  
  return (
    <View>
        <Icon name="leftcircle" size={size} color={color} style={backBtn} onPress={() => navigation.goBack()} />
    </View>
  )
};

const styles = StyleSheet.create({
  
});

export default GoBack;