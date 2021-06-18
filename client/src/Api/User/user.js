import axios from 'axios';

// 사진 업로드하기
export const UploadImgAPI = (fd) => {
  const response = axios.post('/users/uploadProfileImage', fd);
  return response;
};

// 유저 회원가입
export const SignUpAPI = (userInfo) => {
  const response = axios.post('/users/signup', userInfo);
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
