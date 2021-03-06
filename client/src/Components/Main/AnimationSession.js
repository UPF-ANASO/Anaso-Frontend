import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import Main_Image from '../../Assets/Lottie/Main_Image.json';
import {
  PrimaryColor,
  ShadowColor,
  TextColorGray,
} from '../../Assets/Color/Color';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-family: 'Spoqa-Light';
    width: 100%;
    margin-top: 15px;
    display: inline-block;
    text-align: center;
    color: ${TextColorGray};
  }
`;
const LottieContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 2px 3px ${ShadowColor};
  border-radius: 15px;
  background-color: white;
`;

const DefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Main_Image,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const AnimationSession = () => {
  return (
    <Container>
      <LottieContainer>
        <Lottie options={DefaultOptions} width={400} height={350} />
      </LottieContainer>
      <span>5분 만에 작성하는 포트폴리오</span>
    </Container>
  );
};

export default AnimationSession;
