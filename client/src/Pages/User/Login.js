import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Images/logo-kr.svg';
import Header from '../../Components/common/Header';
import Input from '../../Components/Login/Input';
import Button from '../../Components/common/Button/Button';
import { TextColorGray } from '../../Assets/Color/Color';
import { LoginAPI } from '../../Api/User/user';
import Footer from '../../Components/Main/Footer';

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
  font-size: 0.9rem;
  margin-bottom: 45px;
  letter-spacing: 5px;
`;

const Login = () => {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  // ID/PW
  const onChangeID = (e) => {
    setID(e.target.value);
  };
  const onChangePW = (e) => {
    setPW(e.target.value);
  };

  const handlerlogin = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginAPI(ID, PW);
      console.log(response.data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <Header />
      <MainContainer>
        <Logo width={250} height={100} />
        <LogoTitle>나를 표현하는 가장 쉬운 방법</LogoTitle>
        <Input
          onChange={onChangeID}
          placeholder="아이디를 입력해주세요."
          width="250px"
          type="text"
        />
        <Input
          onChange={onChangePW}
          placeholder="비밀번호를 입력해주세요."
          width="250px"
          type="password"
        />
        <Button onClick={handlerlogin} text="로그인" width="250px" />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Login;
