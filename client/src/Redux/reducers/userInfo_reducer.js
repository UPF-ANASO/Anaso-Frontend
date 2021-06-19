import { CLEAR_USER_INFO, SET_USER_INFO } from '../actions/types';

// UserInfo 저장
const initialUserInfoState = {
  userInfo: {
    userID: '', // Mogodb Userid
    name: '', // 이름
    email: '', // 이메일
    phone_number: '', // 휴대폰 번호
    major: '', // 전공
    university: '', // 대학교
    profileImage: '', // 프로필 사진 경로
  },
};

export default function (state = initialUserInfoState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAR_USER_INFO:
      return {
        ...state,
        userInfo: {
          userID: '', // Mongodb UserID
          name: '', // 이름
          email: '', // 이메일
          phone_number: '', // 휴대폰 번호
          major: '', // 전공
          university: '', // 대학교
          profileImage: '', // 사진 경로
        },
      };
    default:
      return state;
  }
}
