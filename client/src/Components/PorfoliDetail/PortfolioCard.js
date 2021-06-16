import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px 10px;
  border: 1px solid black;
  display: flex;
`;

const Title = styled.p`
  font-family: 'Spoqa-Regular';
  font-size: 20px;
`;
const PortfolioCardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
function PortfolioCard({ data }) {
  return (
    <PortfolioCardDiv>
      {data.map((pofol) => (
        <CardDiv>
          <Title key={pofol._id}>{pofol.title}</Title>
          <p key={pofol.id}>{pofol.role}</p>
        </CardDiv>
      ))}
    </PortfolioCardDiv>
  );
}

export default PortfolioCard;
