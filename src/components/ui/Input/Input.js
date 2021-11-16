import React from 'react';
import {TextInput} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

const Input = ({placeholder, onChangeText, secureTextEntry, inpStyle}) => {
  return (
    <TextInput
      style={[styles.inputBox, inpStyle]}
      placeholder={placeholder}
      placeholderTextColor="gray"
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
    backgroundColor: 'rgba(255, 255, 255, .9)',
    color: 'black',
  },
});

export default Input;
