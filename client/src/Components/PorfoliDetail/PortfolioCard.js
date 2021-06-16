import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  display: flex;
`;

const PortfolioCardDiv = styled.div`
  width: 70%;/
  display: flex;
  justify-content: space-around;
`;
function PortfolioCard({ data }) {
  return (
    <PortfolioCardDiv>
      {data.map((pofol) => (
        <CardDiv>
          <p key={pofol._id}>{pofol.title}</p>
        </CardDiv>
      ))}
    </PortfolioCardDiv>
  );
}

export default PortfolioCard;
