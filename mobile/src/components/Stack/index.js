import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../../pages/Login';
import Maps from '../../pages/Maps';
import Ocorrencias from '../../pages/Ocorrencias';
import Perfil from '../../pages/Perfil';
import Home from '../Tab';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
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

        <Stack.Screen
          options={{headerShown: false}}
          name="home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
