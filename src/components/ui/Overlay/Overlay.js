import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';

const {width, height} = Dimensions.get('window');

const Overlay = ({size}) => {
  return (
    <View style={[styles.center, styles.absolute, styles.overlayContainer]}>
      <ActivityIndicator size={size} />
    </View>
  );
};

const styles = FlexHelpers.create({
  overlayContainer: {
    width,
    height,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
});

export default Overlay;
