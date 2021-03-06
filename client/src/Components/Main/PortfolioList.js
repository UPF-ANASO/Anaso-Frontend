import React from 'react';
import styled from 'styled-components';
import { ShadowColor } from '../../Assets/Color/Color';
import Test from '../../Assets/Images/Test.png';
const Container = styled.ul`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  overflow-y: scroll;
  li {
    display: flex;
    width: 80%;
    padding: 1%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-between;
    box-shadow: 1px 2px 3px ${ShadowColor};
    background-color: #ffffff;
  }
`;

const ImageSession = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const InfoSession = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  p {
    width: 100%;
    font-size: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    strong {
      font-family: 'Spoqa-Regular';
      font-size: 0.8rem;
      margin-bottom: 10px;
    }
  }
`;

const PortfolioList = () => {
  return (
    <Container>
      <li>
        <ImageSession>
          <img src={Test} />
        </ImageSession>
        <InfoSession>
          <p>
            <strong>최민석 (minsgy) </strong>
            "나를 깨우는 건 과제와 졸작"
          </p>
        </InfoSession>
      </li>
      <li>
        <ImageSession>
          <img src={Test} />
        </ImageSession>
        <InfoSession>
          <p>
            <strong>최민석 (minsgy) </strong>
            "나를 깨우는 건 과제와 졸작"
          </p>
        </InfoSession>
      </li>
      <li>
        <ImageSession>
          <img src={Test} />
        </ImageSession>
        <InfoSession>
          <p>
            <strong>최민석 (minsgy) </strong>
            "나를 깨우는 건 과제와 졸작"
          </p>
        </InfoSession>
      </li>
      <li>
        <ImageSession>
          <img src={Test} />
        </ImageSession>
        <InfoSession>
          <p>
            <strong>최민석 (minsgy) </strong>
            "나를 깨우는 건 과제와 졸작"
          </p>
        </InfoSession>
      </li>
    </Container>
  );
};

export default PortfolioList;
