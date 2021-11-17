import React, {useState} from 'react';
import {TextInput} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

import {Colors} from '../../../styles';

const Input = ({placeholder, secureTextEntry, inpStyle, changeRef}) => {
  const [value, setValue] = useState('');
  const inputChange = val => {
    setValue(val);
    changeRef.current = val;
  };

  return (
    <TextInput
      value={value}
      style={[styles.inputBox, inpStyle]}
      placeholder={placeholder}
      placeholderTextColor={Colors.gray}
      onChangeText={inputChange}
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
