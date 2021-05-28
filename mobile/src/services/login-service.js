import {configApi} from '../config/api-config';
export default {
  async login(email, senha) {
    return configApi.post('', {
      email: email,
      senha: senha,
    });
  },
};
