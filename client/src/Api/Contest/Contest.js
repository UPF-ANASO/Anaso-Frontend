import axios from 'axios';

// 공모전 리스트
export const ContestListAPI = () => {
  const contestlist = axios.get('contests/lists');
  return contestlist;
};

// 공모전 디테일
export const ContestDetailAPI = (id) => {
  const contestdetail = axios.get('contests/', id);
  return contestdetail;
};
