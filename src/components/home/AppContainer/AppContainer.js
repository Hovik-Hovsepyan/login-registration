import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import Overlay from '../../ui/Overlay/Overlay';

const AppContainer = ({children}) => {
  const isLoading = useSelector(state => state);
  return (
    <View style={{flex: 1}}>
      {children}
      {isLoading.IsLoadingReducer && <Overlay size="large" />}
    </View>
  );
};
export default AppContainer;
