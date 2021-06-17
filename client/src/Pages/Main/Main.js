import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Background from '../../Assets/Images/background_main.jpeg';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import BannerContent from '../../Components/Main/BannerContent';
import Footer from '../../Components/Main/Footer';
import AnimationSession from '../../Components/Main/AnimationSession';
import AfterLoginMain from './AfterLoginMain';
// import ContestCard from '../../Components/Main/ContestCard';
// import PortfolioList from '../../Components/Main/PortfolioList';
// import Profile from '../../Components/Main/Profile';
import Title from '../../Components/Main/Title';
import { setCurrentAuthToken } from '../../Redux/actions/auth_action';
import { ReactComponent as Group } from '../../Assets/Images/group.svg';
import { ReactComponent as Award } from '../../Assets/Images/winners.svg';
import { ReactComponent as Portfolio } from '../../Assets/Images/portfolio_website.svg';
import Fade from 'react-reveal/Fade';
import { TextColorWhite } from '../../Assets/Color/Color';

const Container = styled.div`
  width: 100%;
`;

/* ------------ 로그인 전 메인 --------------- */

const MainContainer = styled.div`
  margin: 0 auto;
  width: ${(props) => props.width || '80%'};
  min-width: 800px;
  height: ${(props) => props.heightData || '65vh'};
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.background || 'white'};
  &#ContentPart {
    background: no-repeat top url(${Background});
    background-size: cover;
  }
`;

const TitleSessionContainer = styled.div`
  width: 50%;
  min-width: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImageSessionContainer = styled.div`
  width: 50%;
  min-width: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentTitle = styled.h3`
  color: ${TextColorWhite};
  font-size: 2rem;
  font-family: 'Spoqa-Regular';
  letter-spacing: -1px;
  line-height: 3rem;
  text-align: center;

  margin-bottom: 2rem;
`;
const ContentText = styled.p`
  color: ${TextColorWhite};
  font-size: 1rem;
  font-family: 'Spoqa-Light';
  line-height: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
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
        <Fade bottom cascade>
          <MainContainer heightData={'80vh'}>
            <TitleSessionContainer>
              <Title />
            </TitleSessionContainer>
            <ImageSessionContainer>
              <AnimationSession />
            </ImageSessionContainer>
          </MainContainer>

          {/* 원하는 팀원 안내 패널*/}

          <MainContainer>
            <ImageSessionContainer>
              <Group width={550} />
            </ImageSessionContainer>
            <TitleSessionContainer>
              <BannerContent
                titleText={'나에게 맞는 사람들'}
                contentText={
                  '안나소는 다른 사람의 경험과 활동을 한 눈에 볼 수 있어요.'
                }
              />
            </TitleSessionContainer>
          </MainContainer>

          {/* 포트폴리오 안내 패널 */}

          <MainContainer>
            <ImageSessionContainer>
              <Portfolio width={550} />
            </ImageSessionContainer>
            <TitleSessionContainer>
              <BannerContent
                titleText={'포트폴리오는 쉽다.'}
                contentText={
                  '무겁기만한 포트폴리오, 안나소 템플릿을 통해 쉽게 설계해요.'
                }
              />
            </TitleSessionContainer>
          </MainContainer>

          {/* 원하는 팀 그룹 */}

          <MainContainer>
            <ImageSessionContainer>
              <Award width={550} />
            </ImageSessionContainer>
            <TitleSessionContainer>
              <BannerContent
                titleText={'성공적인 결과를 이끌다.'}
                contentText={'안나소는 여러분들의 가능성과 기회를 제공합니다.'}
              />
            </TitleSessionContainer>
          </MainContainer>
          <MainContainer
            id="ContentPart"
            width={'100%'}
            background_img={Background}
          >
            <ContentContainer>
              <ContentTitle>
                처음 경험하는 나의 커리어 관리, <br />
                안나소가 해결해드립니다.
              </ContentTitle>
              <ContentText>
                가장 나를 쉽게 표현하는 플랫폼. <br />
                안나소와 함께라면 가능합니다.
              </ContentText>
            </ContentContainer>
          </MainContainer>
        </Fade>
      ) : (
        <AfterLoginMain />
        // 로그인 후
        //   <AfterMainContainer>
        //     <TopSession>
        //       <PortfolioContainer>
        //         <h3>최신 포트폴리오</h3>
        //         <PortfolioList />
        //       </PortfolioContainer>
        //       <ProfileContainer>
        //         <Profile />
        //       </ProfileContainer>
        //     </TopSession>
        //     <MiddleSession>
        //       <h3>최신 공모전 모집글</h3>
        //       <ContestContainer>
        //         <ContestCard />
        //         <ContestCard />
        //         <ContestCard />
        //       </ContestContainer>
        //     </MiddleSession>
        //   </AfterMainContainer>
      )}
      <Footer />
    </Container>
  );
};

export default Main;
