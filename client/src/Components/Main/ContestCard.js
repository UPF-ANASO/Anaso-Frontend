import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/Test.png';
import {
  PrimaryColor,
  ShadowColor,
  TextColorGray,
} from '../../Assets/Color/Color';

const Container = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  border: 1px solid #e4e4e4;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 1px 1px 3px ${ShadowColor};
`;

const ImageSessionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const DescriptionSession = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  font-family: 'Spoqa-Regular';
`;

const ContestTitle = styled.p`
  font-size: 0.5rem;
  font-family: 'Spoqa-Light';
`;

const WriterView = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: ${TextColorGray};
  font-size: 0.5rem;
`;

const ContestCard = () => {
  return (
    <Container>
      <ImageSessionContainer>
        <img src={Test} />
      </ImageSessionContainer>
      <DescriptionSession>
        <Title>AOC와 같이 참여하실 분 구합니다.</Title>
        <ContestTitle>알테어 최적화 대회 2021</ContestTitle>
        <WriterView>
          <span>김율희</span>
          <span>view 1100</span>
        </WriterView>
      </DescriptionSession>
    </Container>
  );
};

export default ContestCard;
