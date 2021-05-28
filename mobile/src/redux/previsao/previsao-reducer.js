import {
  FETCH_PREVISAO,
  FETCH_PREVISAO_FAIL,
  FETCH_PREVISAO_SUCCESS,
} from './previsao-types';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PREVISAO:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PREVISAO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_PREVISAO_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
