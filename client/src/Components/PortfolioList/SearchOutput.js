import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';
import {
  TextColorBlack,
  ShadowColor,
  PrimaryColor,
} from '../../Assets/Color/Color';

const SearchOuputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 80vh;
  overflow-y: scroll;
`;

const OutputContent = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  /* height: 30vh; */
  /* border: 1px solid black; */
  margin-top: 20px;
  box-shadow: 0 5px 5px ${ShadowColor};
  padding: 10px;
`;

const TextDiv = styled.div`
  width: 80%;
  height: 100%;

  & > p:nth-child(1) {
    font-family: 'Spoqa-Medium';
  }
`;

function SearchOutput() {
  return (
    <SearchOuputDiv>
      <OutputContent>
        <img src={Test} width="140px" height="140px" />
        <TextDiv>
          <p>최세환</p>
          <p>설명설명설명</p>
          <button>자세히 보기</button>
        </TextDiv>
      </OutputContent>
      <OutputContent>
        <img src={Test} width="140px" height="140px" />
        <TextDiv>
          <p>최세환</p>
          <p>설명설명설명</p>
          <button>자세히 보기</button>
        </TextDiv>
      </OutputContent>
      <OutputContent>
        <img src={Test} width="140px" height="140px" />
        <TextDiv>
          <p>최세환</p>
          <p>설명설명설명</p>
          <button>자세히 보기</button>
        </TextDiv>
      </OutputContent>
      <OutputContent>
        <img src={Test} width="140px" height="140px" />
        <TextDiv>
          <p>최세환</p>
          <p>설명설명설명</p>
          <button>자세히 보기</button>
        </TextDiv>
      </OutputContent>
    </SearchOuputDiv>
  );
}

export default SearchOutput;
