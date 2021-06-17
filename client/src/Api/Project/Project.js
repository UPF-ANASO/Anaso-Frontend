import axios from 'axios';

// userinfo API
export const UserDetailAPI = (ProfileId) => {
  const userdetail = axios.get(`/users/detailPortfolio/${ProfileId}`);
  // console.log(userdetail);
  return userdetail;
};

// 한 유저의 프로젝트 목록 API
export const ProjectListAPI = () => {
  const projectlist = axios.get('projects/lists');
  console.log(projectlist);
  return projectlist;
};

// 전체 유저의 Portfolio 목록 API
export const UserListAPI = () => {
  const userList = axios.get('users/getPortfolios');
  console.log(userList);
  return userList;
};

// 프로젝트 생성 API
export const ProjectCreateAPI = async (
  title,
  participant,
  date,
  thumbnail,
  role,
) => {
  const api = axios.post('projects/create', {
    title: title,
    participant: '밈미, 옹이',
    endDate: date,
    thumbnail: '이미지 들어갑니다',
    role: '팀장',
  });
  //   ProjectCreateAPI();
  console.log(date);
  return api;
};
