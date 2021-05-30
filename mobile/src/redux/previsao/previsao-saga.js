import {call, put, takeLatest} from '@redux-saga/core/effects';
import axios from 'axios';
import {fetchPrevisaoFail, fetchPrevisaoSuccess} from './previsao-action';
import {FETCH_PREVISAO} from './previsao-types';
function* previsao(action) {
  try {
    const {latitude, longitude} = action.payload;

    const previsao = yield call(
      axios.post(
        `https://api.hgbrasil.com/weather?key=c4334bf0&lat=${latitude}&lon=${longitude}&user_ip=remote`,
      ),
    );

    if (previsao) {
      yield put(fetchPrevisaoSuccess(previsao));
    }
  } catch (error) {
    yield put(fetchPrevisaoFail(error));
  }
}

export function* previsaoSaga() {
  yield takeLatest(FETCH_PREVISAO, previsao);
}
