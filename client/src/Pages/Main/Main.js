import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/common/Header';
import Footer from '../../Components/Main/Footer';
import ImageSession from '../../Components/Main/ImageSession';
import Title from '../../Components/Main/Title';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
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

const Main = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <TitleSessionContainer>
          <Title />
        </TitleSessionContainer>
        <ImageSessionContainer>
          <ImageSession />
        </ImageSessionContainer>
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Main;
