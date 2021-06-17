import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';
import {
  TextColorBlack,
  ShadowColor,
  PrimaryColor,
  PrimaryColor2,
} from '../../Assets/Color/Color';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const SearchOuputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    height: 50px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${ShadowColor};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb:hover {
    transition: 1s;
    background-color: ${PrimaryColor2};
    border-radius: 15px;
  }
`;

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

// 테스트용 데이터
const testdata = [
  {
    username: '최세환',
    info: '컴공 18학번',
  },
  {
    username: '하유민',
    info: '메카 19학번',
  },
  {
    username: '하밈미',
    info: '귀여운 감자 고양이',
  },
  {
    username: '하옹',
    info: '귀여운 돼지 고양이',
  },
  {
    username: '최민석',
    info: '컴소 16학번',
  },
];

function SearchOutput() {
  // map 함수 설정
  const testMap = testdata.map((test, index) => {
    // console.log(test.username);
    // 컨텐트 값 하나씩 리턴
    return (
      <Fade bottom>
        <OutputContent>
          <img src={Test} width="140px" height="140px" />
          <TextDiv>
            <p key={index}>{test.username}</p>
            <p key={index}>{test.info}</p>
            <Link to="/portfoliodetail">
              <button>자세히 보기</button>
            </Link>
          </TextDiv>
        </OutputContent>
      </Fade>
    );
  });
  // console.log(data);
  // console.log(data.username);

  // 받아온 데이터 뿌리기
  return (
    <SearchOuputDiv>
      <>{testMap}</>
    </SearchOuputDiv>
  );
}

export default SearchOutput;
