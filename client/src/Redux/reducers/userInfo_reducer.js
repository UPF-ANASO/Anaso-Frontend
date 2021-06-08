import { CLEAR_USER_INFO, SET_USER_INFO } from '../actions/types';

// UserInfo 저장
const initialUserInfoState = {
  userInfo: {
    name: '', // 이름
    email: '', // 이메일
    phone_number: '', // 휴대폰 번호
    major: '', // 전공
    university: '', // 대학교
  },
};

export default function (state = initialUserInfoState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        currentUserInfo: action.payload,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        currentUserInfo: {
          name: '', // 이름
          email: '', // 이메일
          phone_number: '', // 휴대폰 번호
          major: '', // 전공
          university: '', // 대학교
        },
      };
    default:
      return state;
  }
}
