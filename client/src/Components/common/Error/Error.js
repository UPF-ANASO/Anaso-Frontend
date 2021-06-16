import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import ErrorImg from '../../../Assets/Lottie/Error_img.json';

const Container = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > p {
    font-family: 'Spoqa-Regular';
    margin: 40px;
  }
`;

const DefaultOptions = {
  loop: false,
  autoplay: true,
  animationData: ErrorImg,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Error = () => {
  return (
    <Container>
      <Lottie options={DefaultOptions} width={'300px'} height={'300px'} />
      <p>Error! 페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.</p>
    </Container>
  );
};

export default Error;
