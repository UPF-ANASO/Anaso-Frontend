import axios from 'axios';

// 전체 유저의 Portfolio 목록 API
export const MainUserAPI = () => {
  const userList = axios.get('users/getPortfolios');
  return userList;
};
