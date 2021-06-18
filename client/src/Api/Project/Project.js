import axios from 'axios';

// userinfo API
export const UserDetailAPI = (ProfileId) => {
  const userdetail = axios.get(`/users/detailPortfolio/${ProfileId}`);
  // console.log(userdetail);
  return userdetail;
};

// 한 유저의 프로젝트 목록 API
export const UserProjectAPI = (userId) => {
  const userproject = axios.get(`/projects/${userId}`);
  console.log(userproject);
  return userproject;
};

// 프로젝트 삭제 API
export const UserProjectDeleteAPI = (carddetail, config) => {
  const res = axios.delete(`/projects/delete/${carddetail}`, config);
  console.log(res);
  return res;
};

// 한 유저의 프로젝트 디테일 조회 API
export const UserProjectDetailAPI = (carddetail) => {
  const userprojectdetail = axios.get(`/projects/lists/${carddetail}`);
  console.log(userprojectdetail);
  return userprojectdetail;
};

// 전체 유저의 Portfolio 목록 API
export const UserListAPI = () => {
  const userList = axios.get('users/getPortfolios');
  console.log(userList);
  return userList;
};

// 프로젝트 생성 API
export const ProjectCreateAPI = async (title, config, userId, thumbnail) => {
  console.log(config);
  const api = axios.post(
    'projects/create',
    {
      title: title,
      participant: '밈미, 옹이',
      thumbnail: thumbnail,
      role: '대장',
      user_id: userId,
    },
    // header 추가
    config,
  );
  //   ProjectCreateAPI();
  console.log(api);
  return api;
};
