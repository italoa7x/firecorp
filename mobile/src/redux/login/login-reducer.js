import {FETCH_AUTH, FETCH_AUTH_FAIL, FETCH_AUTH_SUCCESS} from './auth-types';

const initialState = {
  token: null,
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_AUTH:
      return {
        ...state,
        loading: true,
      };

    case FETCH_AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case FETCH_AUTH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
