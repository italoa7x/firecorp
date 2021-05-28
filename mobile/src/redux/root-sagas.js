import {all} from 'redux-saga';
import {loginSaga} from './login/login-saga';
export function* rootSagas() {
  yield all(loginSaga());
}
