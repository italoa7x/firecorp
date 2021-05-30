import {Dimensions, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  input: {
    fontSize: 15,
    color: '#000',
    margin: 15,
    borderRadius: 30,
    width: WIDTH * 0.7,
    backgroundColor: '#C1C1C1',
    textAlign: 'left',
    paddingLeft: 20,
  },
  label: {
    fontSize: 20,
    justifyContent: 'flex-start',
    color: '#000',
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#C1C1C1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  logo: {
    width: WIDTH * 0.4,
    height: HEIGHT * 0.2,
    resizeMode: 'contain',
  },
});
