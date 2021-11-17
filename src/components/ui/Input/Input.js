import React from 'react';
import {TextInput} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';
import {Colors} from '../../../styles';

const Input = ({placeholder, onChangeText, secureTextEntry, inpStyle}) => {
  return (
    <TextInput
      style={[styles.inputBox, inpStyle]}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry === 'eye-off'}
    />
  );
};

const styles = FlexHelpers.create({
  inputBox: {
    width: 300,
    paddingVertical: 10,
    paddingLeft: 15,
    borderRadius: 20,
    marginVertical: 15,
    backgroundColor: Colors.transparentWhite,
    color: Colors.black,
  },
});

export default Input;
