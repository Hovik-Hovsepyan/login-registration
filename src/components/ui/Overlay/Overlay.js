import React from "react";
import { ActivityIndicator, View, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default  Overlay = ({ size }) => {
  return(
    <View style={styles.overlayContainer}>
      <ActivityIndicator size = {size} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    width,
    height,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,.7)",
  },
});