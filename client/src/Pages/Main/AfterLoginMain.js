import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../Components/Main/AfterLogin/ProfileCard';
import SliderCard from '../../Components/Main/AfterLogin/SliderCard';
import TopPortfolio from '../../Components/Main/AfterLogin/TopPortfolio';
import TopContestList from '../../Components/Main/AfterLogin/TopContestList';
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerPanel = styled.div`
  width: ${(props) => props.width || '1000px'};
  height: ${(props) => props.height || '40vh'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  margin: 4% auto 0;
  &#ProfileLogoList {
    display: flex;
    justify-content: space-around;
  }
`;

const PanelTitle = styled.h2`
  font-size: 1rem;
  font-family: 'Spoqa-Medium';
  text-align: left;
  margin-bottom: 30px;
`;

const AfterLoginMain = () => {
  return (
    <Container>
      <ContainerPanel id="ProfileLogoList">
        <SliderCard />
        <ProfileCard />
      </ContainerPanel>
      <ContainerPanel id="UserList">
        <PanelTitle>새로운 안나소 멤버들</PanelTitle>
        <TopPortfolio />
      </ContainerPanel>
      <ContainerPanel height={'65vh'} id="ContestList">
        <PanelTitle>Top 인기순 공모전</PanelTitle>
        <TopContestList />
      </ContainerPanel>
    </Container>
  );
};

export default AfterLoginMain;
