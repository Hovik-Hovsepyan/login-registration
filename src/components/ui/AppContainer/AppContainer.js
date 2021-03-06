import React from 'react';
import {View} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';
import {useSelector} from 'react-redux';

import Overlay from '../Overlay/Overlay';

const AppContainer = ({children}) => {
  const isLoading = useSelector(state => state.AppReducers.isLoading);
  return (
    <View style={styles.fill}>
      {children}
      {isLoading && <Overlay size="large" />}
    </View>
  );
};

const styles = FlexHelpers.create({});

export default AppContainer;
