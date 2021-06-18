import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'contest_create/INITIALIZE'; // 내용 초기화
const CHANGE_FIELD = 'contest_create/CHANGE_FIELD'; // 특정 key 값 바꾸기
// key 값은 무슨 값인지 저장 ex) 'contestName', 'title' ...
const PUSH_POSITION = 'contest_create/PUSH_POSITION'; // 포지션 넣기

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const pushPosition = createAction(
  PUSH_POSITION,
  ({
    positionNameKey,
    positionNameValue,
    recuritNumberKey,
    recuritNumberValue,
  }) => ({
    positionNameKey,
    positionNameValue,
    recuritNumberKey,
    recuritNumberValue,
  }),
);

const initialState = {
  contestName: '', // 공모전 이름
  title: '', // 제목
  author: '', // 작성자 이름
  deadLine: '', // 마감 기한
  detail: '', // 상세 내용
  poster: '', // 대표 이미지
  homepage: '', // 홈페이지
  category: '', // 카테고리
  organizer: '', // 주최 기관
  totalMembers: 0, // 모집 인원 수
  positions: [
    {
      positionName: '', // 포지션 이름
      recruitNumbers: 0, // 해당 포지션 총 인원 수
    },
  ],
};

const contestCreate = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // 초기화 (initialState를 넣으면 초기 상태로 변경)
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값 업데이트
    }),
    [PUSH_POSITION]: (
      state,
      { payload: { positionNameValue, recuritNumberValue } },
    ) => ({
      ...state,
      positions: [
        ...state.positions,
        {
          positionName: positionNameValue,
          recruitNumbers: recuritNumberValue,
        },
      ],
    }),
  },
  initialState,
);

export default contestCreate;
