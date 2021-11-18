import React, {useCallback, useState} from 'react';
import {TextInput} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({placeholder, inpStyle, changeRef, isPassword}) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(isPassword);

  const inputChange = useCallback(
    val => {
      setValue(val);
      changeRef.current = val;
    },
    [changeRef],
  );

  const showHide = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <>
      <TextInput
        value={value}
        style={[styles.inputBox, inpStyle]}
        placeholder={placeholder}
        placeholderTextColor={Colors.gray}
        onChangeText={inputChange}
        secureTextEntry={show}
      />

      {isPassword && (
        <Icon
          name={show ? 'eye-off' : 'eye'}
          size={30}
          color={Colors.black}
          style={styles.passwordShow}
          onPress={showHide}
        />
      )}
    </>
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
  passwordShow: {
    right: 40,
  },
});

export default Input;
