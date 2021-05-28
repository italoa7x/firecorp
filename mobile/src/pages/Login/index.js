import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Login = () => {
  return (
    <View style={{backgroundColor: 'tomato'}}>
      <Text>E-mail</Text>
      <TextInput placeholder={'Digite seu e-mail'} />
      <TextInput secureTextEntry={true} />
      <Text>Senha</Text>
    </View>
  );
};

export default Login;
