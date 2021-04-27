import React, {useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
const Maps = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const latDelta = 0.0922;
  const lngDelta = 0.0421;

  Geolocation.getCurrentPosition(position => {
    const {latitude, longitude} = position.coords;
    setLat(latitude);
    setLng(longitude);
  });

  // const long = -34.8526367199577;
  // const lat = -7.168667855425305;

  return (
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
  );
};

export default Maps;
