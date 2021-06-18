import React from 'react';
import styled from 'styled-components';
import {
  TextColorBlack,
  PrimaryColor,
  ShadowColor,
  PrimaryColor2,
} from '../../Assets/Color/Color';

const Author = styled.span`
  display: inline-block;
  width: 100px;
  font-family: 'Spoqa-Light';
  font-size: 1.1rem;
  margin-left: 15px;
`;

const Title = styled.span`
  display: inline-block;
  width: 450px;
  font-family: 'Spoqa-Regular';
  font-size: 1.3rem;
  margin-left: 15px;
`;

const ContestCardDiv = styled.div`
  width: 82vw;
  height: 45vh;
  margin: 0 auto;
  text-align: left;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
  & > div {
    margin-top: 20px;
  }
`;
function ContestCard({ data }) {
  return (
    <>
      <ContestCardDiv>
        {data.map((contest) => (
          <>
            <div>
              <Author key={contest._id}>{contest.author}</Author>
              <Title key={contest._id}>{contest.title}</Title>
            </div>
            {/* // <p key={contest._id}>{contest.title}</p> */}
          </>
        ))}
      </ContestCardDiv>
    </>
  );
}

export default ContestCard;
