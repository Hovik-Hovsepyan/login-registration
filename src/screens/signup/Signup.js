import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";

import SignupFormFirst from "../singupformfirst/SignupFormFirst";
import GoBack from "../../components/home/GoBack/GoBack";

const image = {uri:"https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"};

const SingUp = () => {
  return (
    <View style={styles.signupContainer}>
      <ImageBackground style={styles.signupBackground} source={image} >
        <GoBack 
          size={30}
          color="white"
          backBtn={styles.backBtn}
        />
        <SignupFormFirst />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flex:1,
    backgroundColor: "black",
  },
  signupBackground: {
    flex: 1,
  },
  leftBtn: {
    padding: 15,
  },
  backBtn: {
    padding: 15,
  },
});

export default SingUp;
