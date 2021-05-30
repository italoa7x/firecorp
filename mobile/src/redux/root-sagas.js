import {all} from 'redux-saga/effects';
import {loginSaga} from './login/login-saga';
import {previsaoSaga} from './previsao/previsao-saga';
export function* rootSagas() {
  yield all([loginSaga(), previsaoSaga()]);
}
