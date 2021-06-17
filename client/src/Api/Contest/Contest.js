import axios from 'axios';

// 공모전 리스트
export const ContestListAPI = () => {
  const contestlist = axios.get('contests/lists');
  return contestlist;
};

// 공모전 디테일
export const ContestDetailAPI = () => {
  const contestdetail = axios.get(location);
  return contestdetail;
};

// 공모전 참가 신청
export const contestParticipateAPI = (id) => {
  const contestparticipate = axios.post(`/contests/participate/${id}`, {
    positionName: positionName,
    volunteer: volunteer,
  });
  return contestparticipate;
};
