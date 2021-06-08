import { SET_USER_INFO, CLEAR_USER_INFO } from './types';

// 유저 로그인 후 토큰 저장 액션
export function setCurrentUserInfo(currentUserInfo) {
  return {
    type: SET_USER_INFO,
    payload: currentUserInfo,
  };
}

// 유저 로그아웃 액션
export function clearUserInfo() {
  return {
    type: CLEAR_USER_INFO,
  };
}
