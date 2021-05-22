import { instance } from '../Server';

// 이미지 경로까지 저장해야함. form-data 이용

export const SignUpAPI = (fd) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return instance.post('/users/signup/', fd, config);
};

// JWT Token 받기
export const LoginAPI = (email, password) =>
  instance.post('/users/signin', {
    email: email,
    password: password,
  });
