import axios from 'axios';

export const ProjectListAPI = async () => {
  const projectlist = await axios.get('projects/lists');
  return projectlist;
};

export const ProjectCreateAPI = async () => {
  const api = axios.post('projects/create', {
    title: '고양이는 귀여워 프로젝트',
    participant: '밈미, 옹이',
    endDate: '2021-06-22',
    thumbnail: '이미지 들어갑니다',
    role: '팀장',
  });
  //   ProjectCreateAPI();
  // console.log(api);
  return api;
};
