import React from 'react';
import {Text, View} from 'react-native';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IOIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const DetalhesPrevisao = ({previsao}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerPrevisao}>
        <View style={styles.containerDados}>
          <IconAwesome name="location-arrow" size={35} color="#010101" />
          <Text style={styles.label}>{'NE'}</Text>
        </View>

        <View style={styles.containerDados}>
          <IconAwesome name="wind" size={35} color="#010101" />
          <Text style={styles.label}>
            {previsao ? previsao.wind_speedy : ''}
          </Text>
        </View>
        <View style={styles.containerDados}>
          <IOIcon name="water-outline" size={35} color="blue" />
          <Text style={styles.label}>{previsao ? previsao.humidity : ''}</Text>
        </View>

        <View style={styles.containerDados}>
          <IOIcon name="thermometer-outline" size={35} color="red" />
          <Text style={styles.label}>
            {previsao ? `${previsao.temp} º` : ''}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetalhesPrevisao;
