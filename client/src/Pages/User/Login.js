import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/Images/logo-kr.svg';
import { TextColorGray } from '../../Assets/Color/Color';
import { LoginAPI } from '../../Api/User/user';
import Footer from '../../Components/Main/Footer';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import Input from '../../Components/Login/Input';
import Button from '../../Components/common/Button/Button';
import { setCurrentAuthToken } from '../../Redux/actions/auth_action';
import { setCurrentUserInfo } from '../../Redux/actions/userInfo_action';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const jwt_token = useSelector((state) => state.auth.currentToken);
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  // ID/PW
  const onChangeID = (e) => {
    setID(e.target.value);
  };
  const onChangePW = (e) => {
    setPW(e.target.value);
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginAPI(ID, PW);
      console.log(response.data.userInfo);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      dispatch(setCurrentAuthToken(response.data.token)); // Token state 저장
      const userInfo = {
        name: response.data.userInfo.name,
        email: response.data.userInfo.email,
        phone_number: response.data.userInfo.phoneNumber,
        major: response.data.userInfo.major,
        university: response.data.userInfo.university,
      };
      dispatch(setCurrentUserInfo(userInfo));
      history.replace('/');
    } catch (err) {
      console.log(err);
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
          placeholder="아이디(Email)를 입력해주세요."
          width="250px"
          type="text"
        />
        <Input
          onChange={onChangePW}
          placeholder="비밀번호를 입력해주세요."
          width="250px"
          type="password"
        />
        <Button onClick={handlelogin} text="로그인" width="250px" />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Login;
