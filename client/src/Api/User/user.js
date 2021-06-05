import axios from 'axios';

// 이미지 경로까지 저장해야함. form-data 이용
export const SignUpAPI = (fd) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = axios.post('/users/signup', fd, config);
  return response;
};

// JWT Token 받기
export const LoginAPI = (email, password) => {
  const response = axios.post('/users/signin', {
    email: email,
    password: password,
  });
  return response;
};

export const UserDelete = async () => await axios.delete('/users/deleteUser');
