import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Circle, Marker} from 'react-native-maps';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import DetalhesPrevisao from '../DetalhesPrevisao';
import styles from './styles';
const Maps = () => {
  const lat = -7.8887727;
  const lng = -37.1171012;
  const latDelta = 0.0922;
  const lngDelta = 0.0421;

  const [previsao, setPrevisao] = useState();

  useEffect(() => {
    function handleData() {
      setTimeout(async () => {
        const {data} = await axios(
          `https://api.hgbrasil.com/weather?key=c4334bf0&lat=${lat}&lon=${lng}&user_ip=remote`,
        );

        setPrevisao(data.results);
      }, 5000);
    }

    handleData();
  }, [lat, lng]);

  return (
    <View style={styles.containerMaps}>
      <MapView
        loadingEnabled
        style={styles.container}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        }}>
        <Marker
          title="Acidente de carro"
          coordinate={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta,
          }}
        />

        <Circle
          radius={1000}
          center={{
            latitude: lat,
            longitude: lng,
          }}
        />
      </MapView>
      <View style={styles.containerFilter}>
        <IconAwesome name="filter" size={30} color="#000" />
      </View>
      <DetalhesPrevisao previsao={previsao} />
    </View>
  );
};

export default Maps;
