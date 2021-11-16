import React from 'react';
import {Pressable, Text} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

const AppButton = ({pressHandler, btnStyle, btnText}) => {
  return (
    <Pressable onPress={pressHandler} style={[styles.AppBtn, btnStyle]}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
    </Pressable>
  );
};

const styles = FlexHelpers.create({
  AppBtn: {
    width: 120,
    marginHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 15,
  },
  btnTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default AppButton;
