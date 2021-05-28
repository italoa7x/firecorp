import {FETCH_AUTH, FETCH_AUTH_FAIL, FETCH_AUTH_SUCCESS} from './auth-types';

export const fecthAuth = user => {
  return {
    type: FETCH_AUTH,
    payload: user,
  };
};

export const fetchAuthSuccess = token => {
  return {
    type: FETCH_AUTH_SUCCESS,
    payload: token,
  };
};

export const fetchAuthFail = error => {
  return {
    type: FETCH_AUTH_FAIL,
    payload: error,
  };
};
