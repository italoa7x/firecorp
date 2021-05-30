import React from 'react';
import {Provider} from 'react-redux';
import Stack from './components/Stack';
import store from './redux/store';
export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
