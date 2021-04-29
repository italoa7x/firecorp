import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import Maps from '../../pages/Maps';
import Ocorrencia from '../../pages/Ocorrencias';
import Perfil from '../../pages/Perfil';

const components = () => {
  const Stack = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        tabBarOptions={{activeTintColor: 'blue', showLabel: false}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let icon = '';
            if (route.name === 'maps') {
              icon = 'map-marker';
            } else if (route.name === 'perfil') {
              icon = 'user';
            } else {
              icon = 'ambulance';
            }
            return <IconAwesome name={icon} size={30} color={color} />;
          },
        })}>
        <Stack.Screen name="maps" component={Maps} />
        <Stack.Screen name="ocorrencias" component={Ocorrencia} />
        <Stack.Screen name="perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default components;
