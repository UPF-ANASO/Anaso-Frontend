import { SET_AUTH_TOKEN, CLEAR_TOKEN } from './types';

// 유저 로그인 후 토큰 저장 액션
export function setCurrentAuthToken(currentToken) {
  return {
    type: SET_AUTH_TOKEN,
    payload: currentToken,
  };
}

// 유저 로그아웃 액션
export function clearToken() {
  return {
    type: CLEAR_TOKEN,
  };
}
