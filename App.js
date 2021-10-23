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

const App = ()=> {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
