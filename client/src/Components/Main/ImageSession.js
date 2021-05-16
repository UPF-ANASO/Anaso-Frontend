import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import Main_Image from '../../Assets/Lottie/Main_Image.json';
import { PrimaryColor, ShadowColor } from '../../Assets/Color/Color';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: 'Spoqa-Light';
    width: 100%;
    margin-top: 15px;
    display: inline-block;
    text-align: center;
    border-bottom: 1px solid ${PrimaryColor};
  }
`;
const LottieContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 2px 3px ${ShadowColor};
  border-radius: 15px;
`;

const DefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Main_Image,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ImageSession = () => {
  return (
    <Container>
      <LottieContainer>
        <Lottie options={DefaultOptions} width={'300px'} height={'250px'} />
      </LottieContainer>
      <span>5분 만에 작성하는 포트폴리오</span>
    </Container>
  );
};

export default ImageSession;
