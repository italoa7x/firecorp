import React from 'react';
import {Text, View} from 'react-native';
import IOIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DetalhesPrevisao = ({previsao}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPrevisao}>
        <IOIcon name="water-outline" size={35} color="blue" />
        <Text>{'5%'}</Text>
      </View>
    </View>
  );
};

export default DetalhesPrevisao;
