import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import LoadingImg from '../../../Assets/Lottie/Loading_img.json';

const Container = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > p {
    font-family: 'Spoqa-Regular';
  }
`;

const DefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LoadingImg,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading = () => {
  return (
    <Container>
      <Lottie options={DefaultOptions} width={'300px'} height={'250px'} />
      <p>Loading...</p>
    </Container>
  );
};

export default Loading;
