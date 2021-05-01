import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    marginLeft: '25%',
    marginTop: '2%',
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
  containerPrevisao: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerDados: {
    alignItems: 'center',
    flexDirection: 'column',
    marginLeft: '10%',
  },
});
