import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import ContestCard from '../../Components/Main/ContestCard';
import Footer from '../../Components/Main/Footer';
import ImageSession from '../../Components/Main/ImageSession';
import PortfolioList from '../../Components/Main/PortfolioList';
import Profile from '../../Components/Main/Profile';
import Title from '../../Components/Main/Title';

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: center; */
`;

const TopSession = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    width: 90%;
    margin: 10px 0;
  }
`;

const PortfolioContainer = styled.div`
  flex: 1;
  flex-basis: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 70%; */
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  flex: 1;
  flex-basis: 30%;
  height: 100%;
`;

const MiddleSession = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    width: 90%;
    margin: 10px 0;
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
  return (
    <Container>
      <Header />
      {/* <MainContainer>
        <TitleSessionContainer>
          <Title />
        </TitleSessionContainer>
        <ImageSessionContainer>
          <ImageSession />
        </ImageSessionContainer>
      </MainContainer> */}
      {/* -------- 로그인 후 ----------- */}
      <AfterMainContainer>
        {/* 포트폴리오 리스트 및 프로필 */}
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
      <Footer />
    </Container>
  );
};

export default Main;
