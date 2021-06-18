import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';

const Title = styled.p`
  font-family: 'Spoqa-Medium';
  font-size: 1.5rem;
`;

const Writer = styled.p`
  font-family: 'Spoqa-Light';
  font-size: 1.2rem;
`;

function MyPortfolioDetail() {
  return (
    <>
      <Header />
      <Title>제목 들어가는 부분</Title>
      <Writer>작성자</Writer>
      <div>
        <p>여기는 내용</p>
      </div>
    </>
  );
}

export default MyPortfolioDetail;
