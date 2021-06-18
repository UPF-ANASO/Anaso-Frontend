import React from 'react';
import styled from 'styled-components';
import ProfileCard from '../../Components/Main/AfterLogin/ProfileCard';
import SliderCard from '../../Components/Main/AfterLogin/SliderCard';
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContainerPanel = styled.div`
  width: ${(props) => props.width || '1000px'};
  height: ${(props) => props.height || '40vh'};
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: 5%;
  margin: 0 auto;
  &#ProfileLogoList {
    display: flex;
  }
`;

const AfterLoginMain = () => {
  return (
    <Container>
      <ContainerPanel id="ProfileLogoList">
        <SliderCard />
        <ProfileCard />
      </ContainerPanel>
      <ContainerPanel id="UserList"></ContainerPanel>
      <ContainerPanel id="ContestList"></ContainerPanel>
    </Container>
  );
};

export default AfterLoginMain;
