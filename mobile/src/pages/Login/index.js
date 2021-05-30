import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  function login() {
    navigation.navigate('home');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder={'Digite seu e-mail'}
        keyboardType="email-address"
        style={styles.input}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        onChangeText={value => setSenha(value)}
        value={senha}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text>Logar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
