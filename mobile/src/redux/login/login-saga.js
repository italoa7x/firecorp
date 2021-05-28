import {call, put, takeLatest} from 'redux-saga/effects';
import loginService from '../../services/login-service';
import {fetchAuthFail, fetchAuthSuccess} from './auth-action';
import {FETCH_AUTH} from './auth-types';
function* login(action) {
  try {
    const {email, senha} = action.payload;
    const token = yield call(loginService.login, email, senha);

    if (token) {
      yield put(fetchAuthSuccess(token));
    }
  } catch (error) {
    yield put(fetchAuthFail(error));
  }
}

export function* loginSaga() {
  yield takeLatest(FETCH_AUTH, login);
}
