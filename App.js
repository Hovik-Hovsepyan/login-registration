import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/config/store';

import {AppNavigation} from './src/navigation/';

import AppContainer from './src/components/ui/AppContainer/AppContainer';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppNavigation />
      </AppContainer>
    </Provider>
  );
};

export default App;
