import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const DetalhesPrevisao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPrevisao}>
        <Text>Previsao do tempo</Text>
        <Text>Velocidade do vento</Text>
      </View>
    </View>
  );
};

export default DetalhesPrevisao;
