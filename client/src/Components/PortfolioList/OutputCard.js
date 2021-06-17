import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  TextColorBlack,
  ShadowColor,
  PrimaryColor,
  PrimaryColor2,
} from '../../Assets/Color/Color';
import Test from '../../Assets/Images/test.jpeg';

const OutputContent = styled.div`
  display: flex;
  width: 60vw;
  justify-content: space-between;
  /* height: 30vh; */
  /* border: 1px solid black; */
  margin-top: 20px;
  box-shadow: 0 5px 5px ${ShadowColor};
  padding: 10px;

  img {
    border-radius: 5px;
  }
`;

const TextDiv = styled.div`
  width: 80%;
  /* height: 100%; */

  & > p:nth-child(1) {
    font-family: 'Spoqa-Medium';
    /* height: 50px; */
    margin-top: 10px;
  }

  & > p:nth-child(2) {
    /* padding: 5px; */
    /* border: 1px solid black; */
    height: 70px;
  }

  button {
    font-family: 'Spoqa-Light';
    background-color: white;
    border: 1px solid ${PrimaryColor};
    border-radius: 3px;
    font-size: 0.9rem;
    color: ${PrimaryColor};
    padding: 5px;
    width: 120px;
  }

  button:hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: ${PrimaryColor};
    color: white;
  }
`;

function OutputCard({ data }) {
  return (
    <Fade bottom>
      <OutputContent>
        <img src={Test} width="140px" height="140px" />
        <TextDiv>
          <p>타이틀</p>
          <p>설명</p>
          <Link to="/portfoliodetail">
            <button>자세히 보기</button>
          </Link>
        </TextDiv>
      </OutputContent>
    </Fade>
  );
}

export default OutputCard;
