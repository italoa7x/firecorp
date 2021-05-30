import axios from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {fetchAuthFail, fetchAuthSuccess} from './login-action';
import {FETCH_AUTH} from './login-types';
function* login(action) {
  try {
    const {email, senha} = action.payload;
    const token = yield call(axios.post, '', {
      email: email,
      senha: senha,
    });

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
