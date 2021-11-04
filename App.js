import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/config/store';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {AppNavigation} from './src/navigation/';
import AppContainer from './src/components/home/AppContainer/AppContainer';
import SplashScreen from 'react-native-splash-screen';

const App = ()=> {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppContainer>
        <AppNavigation />
      </AppContainer>
    </Provider>
  );
};

export default App;
