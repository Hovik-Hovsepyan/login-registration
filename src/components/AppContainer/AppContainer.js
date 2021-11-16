import React from 'react';
import {View} from 'react-native';
import FlexHelpers from 'react-native-flex-helper';
import {useSelector} from 'react-redux';

import Overlay from '../ui/Overlay/Overlay';

const AppContainer = ({children}) => {
  const isLoading = useSelector(state => state);
  return (
    <View style={styles.fill}>
      {children}
      {isLoading.IsLoadingReducer && <Overlay size="large" />}
    </View>
  );
};

const styles = FlexHelpers.create({});

export default AppContainer;
