import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const AppButton = ({pressHandler, btnStyle, btnText}) => {
  return (
    <Pressable onPress={pressHandler} style={[styles.AppBtn, btnStyle]}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
