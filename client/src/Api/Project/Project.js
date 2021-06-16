import axios from 'axios';

// 프로젝트 목록 API
export const ProjectListAPI = () => {
  const projectlist = axios.get('projects/lists');
  return projectlist;
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
  // console.log(api);
  return api;
};
