import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from '../../Assets/Color/Color';

const MyPorfolioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95%;
  height: 50%;
  border-radius: 10px;
  background-color: #c8f3da;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
`;

const PortfolImg = styled.div`
  width: 500px;
  height: 120px;
  border-radius: 10px;
  background-color: ${PrimaryColor};
`;

const Mark = styled.div`
  width: 500px;
  height: 120px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: ${PrimaryColor};
`;

const AS = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 250px;
`;
function MyPorfolio() {
  return (
    <MyPorfolioDiv>
      <div>
        <AS>한 줄 소개 어쩌구 </AS>
      </div>
      <div>
        <PortfolImg />
        <Mark />
      </div>
    </MyPorfolioDiv>
  );
}

export default MyPorfolio;
