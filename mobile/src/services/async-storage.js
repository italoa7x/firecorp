import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from '../constants/keys';

export default {
  async saveToken(token) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  },

  async restoreToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  },
};
