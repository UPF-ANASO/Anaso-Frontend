import React from 'react';
import styled from 'styled-components';
import { PrimaryColor, TextColorBlack } from '../../Assets/Color/Color';
import TestImg from '../../Assets/Images/test.jpeg';

const MyStudyDiv = styled.div`
  width: 25%;
  min-width: 250px;
  height: 30%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
  overflow-y: scroll;
  & > p {
    font-family: 'Spoqa-Medium';
    font-size: 1.2rem;
  }
`;

const MystudyCard = styled.div`
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: #e3e3e3;

  & > img {
    border-radius: 50%;
  }
  & > div > p:nth-child(1) {
    font-family: 'Spoqa-Regular';
  }

  & > div > p:nth-child(2) {
    font-family: 'Spoqa-Light';
    font-size: 0.8rem;
  }

  & > div > p + p {
    margin-top: 5px;
  }
`;

function MyStudy() {
  return (
    <MyStudyDiv>
      <p>참여 중인 스터디</p>
      <MystudyCard>
        <img src={TestImg} alt="스터디 사진" height="50px" width="50px" />
        <div>
          <p>고양이의 귀여움 탐구 스터디</p>
          <p>고양이는 왜 이렇게 귀여울까요 ?</p>
        </div>
      </MystudyCard>
      <MystudyCard>
        <img src={TestImg} alt="스터디 사진" height="50px" width="50px" />
        <div>
          <p>고양이의 귀여움 탐구 스터디</p>
          <p>고양이는 왜 이렇게 귀여울까요 ?</p>
        </div>
      </MystudyCard>
      <MystudyCard>
        <img src={TestImg} alt="스터디 사진" height="50px" width="50px" />
        <div>
          <p>고양이의 귀여움 탐구 스터디</p>
          <p>고양이는 왜 이렇게 귀여울까요 ?</p>
        </div>
      </MystudyCard>
      <MystudyCard>
        <img src={TestImg} alt="스터디 사진" height="50px" width="50px" />
        <div>
          <p>고양이의 귀여움 탐구 스터디</p>
          <p>고양이는 왜 이렇게 귀여울까요 ?</p>
        </div>
      </MystudyCard>
    </MyStudyDiv>
  );
}

export default MyStudy;
