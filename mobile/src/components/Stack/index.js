import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../../pages/Login';
import Maps from '../../pages/Maps';
import Ocorrencias from '../../pages/Ocorrencias';
import Perfil from '../../pages/Perfil';
const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen options={{header: false}} name="login" component={Login} />
      <Stack.Screen
        options={{headerShown: false}}
        name="maps"
        component={Maps}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="pefil"
        component={Perfil}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ocorrencias"
        component={Ocorrencias}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
