import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PrimaryColor, PrimaryColor2 } from '../../Assets/Color/Color';
import Header from '../../Components/common/Header';
import ContestCard from '../../Components/Main/ContestCard';
import Footer from '../../Components/Main/Footer';
import ImageSession from '../../Components/Main/ImageSession';
import PortfolioList from '../../Components/Main/PortfolioList';
import Profile from '../../Components/Main/Profile';
import Title from '../../Components/Main/Title';
import { setCurrentAuthToken } from '../../Redux/actions/auth_action';

const Container = styled.div`
  width: 100%;
`;

/* ------------ 로그인 전 메인 --------------- */

const MainContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const TitleSessionContainer = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageSessionContainer = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* ------------ 로그인 후 메인 --------------- */

const AfterMainContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-top: 30px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;

const TopSession = styled.div`
  width: 100%;
  height: 35%;
  padding: 2.5% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PortfolioContainer = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 12px;
  /* padding: 2.5% 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 243, 218, 0.3);
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  h3 {
    width: 85%;
    margin: 15px 0;
  }
`;

const ProfileContainer = styled.div`
  width: 30%;
  height: 100%;
`;

const MiddleSession = styled.div`
  width: 100%;
  height: 30%;
  padding: 2.5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(200, 243, 218, 0.3);
  border-radius: 12px;
  h3 {
    width: 90%;
    margin: 15px 0;
  }
`;

const ContestContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  div + div {
    margin-left: 10px;
  }
`;

const Main = () => {
  const dispatch = useDispatch();
  const [Token, setToken] = useState('');

  useEffect(() => {
    // Token 가져오기
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      dispatch(setCurrentAuthToken(token));
    }
  }, []);

  return (
    <Container>
      <Header />
      {!Token ? (
        // 로그인 전
        <MainContainer>
          <TitleSessionContainer>
            <Title />
          </TitleSessionContainer>
          <ImageSessionContainer>
            <ImageSession />
          </ImageSessionContainer>
        </MainContainer>
      ) : (
        // 로그인 후
        <AfterMainContainer>
          <TopSession>
            <PortfolioContainer>
              <h3>최신 포트폴리오</h3>
              <PortfolioList />
            </PortfolioContainer>
            <ProfileContainer>
              <Profile />
            </ProfileContainer>
          </TopSession>
          <MiddleSession>
            <h3>최신 공모전 모집글</h3>
            <ContestContainer>
              <ContestCard />
              <ContestCard />
              <ContestCard />
            </ContestContainer>
          </MiddleSession>
        </AfterMainContainer>
      )}
      <Footer />
    </Container>
  );
};

export default Main;
