import axios from 'axios';
import React, {useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import DetalhesPrevisao from '../DetalhesPrevisao';
import styles from './styles';
const Maps = () => {
  const lat = -7.8887727;
  const lng = -37.1171012;
  const latDelta = 0.0922;
  const lngDelta = 0.0421;

  const [previsao, setPrevisao] = useState();

  setTimeout(async () => {
    const {data} = await axios(
      `https://api.hgbrasil.com/weather?key=c4334bf0&lat=${lat}&lon=${lng}&user_ip=remote`,
    );
    console.log(data);
    setPrevisao(data);
  }, 5000);

  return (
    <View style={{flex: 1}}>
      <MapView
        loadingEnabled
        showsMyLocationButton
        style={styles.container}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        }}>
        <Marker
          coordinate={{
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta,
          }}
        />
      </MapView>
      <DetalhesPrevisao />
    </View>
  );
};

export default Maps;
