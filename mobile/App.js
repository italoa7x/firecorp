import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
// import Tab from './src/components/Tab';
import Stack from './src/components/Stack';
import store from './src/redux/store';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
