import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Images/logo-kr.svg';
import Header from '../../Components/common/Header';
import Input from '../../Components/Login/Input';
import Button from '../../Components/common/Button/Button';
import { TextColorGray } from '../../Assets/Color/Color';
import { LoginAPI } from '../../Api/User/user';
const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 1rem;
  input {
    margin-bottom: 15px;
  }
`;

const LogoTitle = styled.h3`
  font-family: 'Spoqa-Light';
  color: ${TextColorGray};
  font-size: 0.5rem;
  margin-bottom: 30px;
  letter-spacing: 5px;
`;

const Login = () => {
  const handlerlogin = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginAPI(email, password);
      console.log(response.data);
    } catch (err) {
      const msg = err.response.data.message;
      alert(msg);
    }
  };

  return (
    <Container>
      <Header />
      <MainContainer>
        <Logo width={200} height={100} />
        <LogoTitle>나를 표현하는 가장 쉬운 방법</LogoTitle>
        <Input placeholder="아이디를 입력해주세요." width="250px" type="text" />
        <Input
          placeholder="비밀번호를 입력해주세요."
          width="250px"
          type="password"
        />
        <Button text="로그인" width="250px" />
      </MainContainer>
    </Container>
  );
};

export default Login;
