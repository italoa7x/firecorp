import {
  FETCH_PREVISAO,
  FETCH_PREVISAO_FAIL,
  FETCH_PREVISAO_SUCCESS,
} from './previsao-types';

export const fetchPrevisao = coordenadas => {
  return {
    type: FETCH_PREVISAO,
    payload: coordenadas,
  };
};
export const fetchPrevisaoSuccess = previsao => {
  return {
    type: FETCH_PREVISAO_SUCCESS,
    payload: previsao,
  };
};

export const fetchPrevisaoFail = error => {
  return {
    type: FETCH_PREVISAO_FAIL,
    payload: error,
  };
};
