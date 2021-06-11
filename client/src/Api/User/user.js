import axios from 'axios';

// 사진 업로드하기
export const UploadImgAPI = (fd) => {
  const response = axios.post('/users/uploadProfileImage', fd);
  return response;
};

// 이미지 경로까지 저장해야함. form-data 이용
export const SignUpAPI = (fd) => {
  const response = axios.post('/users/signup', fd);
  return response;
};

// JWT Token API 받기
export const LoginAPI = (email, password) => {
  const response = axios.post('/users/signin', {
    email: email,
    password: password,
  });
  return response;
};

export const UserDelete = async () => await axios.delete('/users/deleteUser');
