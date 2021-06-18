import React from 'react';
import styled from 'styled-components';
import {
  TextColorBlack,
  PrimaryColor,
  ShadowColor,
  PrimaryColor2,
} from '../../Assets/Color/Color';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: ${TextColorBlack};
  }
  &:link {
    color: ${TextColorBlack};
  }
`;

const CardDiv = styled.div`
  width: 200px;
  height: 210px;
  margin: 20px 10px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 5px ${ShadowColor};
`;

const Title = styled.p`
  margin-top: 8px;
  font-family: 'Spoqa-Regular';
  font-size: 20px;
`;
const PortfolioCardDiv = styled.div`
  width: 82vw;
  height: 45vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

const Img = styled.img`
  width: 200px;
  height: 170px;
`;
function PortfolioCard({ data }) {
  console.log({ data });
  return (
    <>
      {data === [] ? (
        <p>없음</p>
      ) : (
        <>
          <PortfolioCardDiv>
            {data.map((pofol) => (
              <StyledLink to={`/myportfoliodetail/${pofol._id}`}>
                <CardDiv>
                  <Img src={pofol.thumbnail} alt="test" />
                  <Title key={pofol._id}>{pofol.title}</Title>
                  {/* <p key={pofol.id}>{pofol.role}</p> */}
                </CardDiv>
              </StyledLink>
            ))}
          </PortfolioCardDiv>
        </>
      )}
    </>
  );
}

export default PortfolioCard;
