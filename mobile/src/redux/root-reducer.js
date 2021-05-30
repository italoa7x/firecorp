import {combineReducers} from 'redux';
import loginReducer from './login/login-reducer';
import previsaoReducer from './previsao/previsao-reducer';

export const rootReducer = combineReducers({
  login: loginReducer,
  previsao: previsaoReducer,
});
