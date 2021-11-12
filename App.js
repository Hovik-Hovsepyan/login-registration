import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {store} from './src/config/store';

import {AppNavigation} from './src/navigation/';

import AppContainer from './src/components/home/AppContainer/AppContainer';

const App = () => {
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
