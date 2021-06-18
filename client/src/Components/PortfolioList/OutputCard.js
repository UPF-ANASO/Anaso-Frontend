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
import PortfolioCard from '../PorfoliDetail/PortfolioCard';

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
  margin-left: 30px;
  width: 80%;
  /* height: 100%; */

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

const Namebox = styled.p`
  font-family: 'Spoqa-Medium';
  font-size: 1.3rem;
`;

const Descriptionbox = styled.p`
  font-family: 'Spoqa-Light';
  font-size: 1.1rem;
  margin: 10px 0;
  height: 80px;
`;

const Univdiv = styled.p`
  margin-top: 10px;
  font-family: 'Spoqa-Light';
  display: flex;
  font-size: 0.9rem;
  & > p:nth-child(1) {
    margin-right: 8px;
  }
`;
function OutputCard({ data }) {
  return (
    <Fade bottom>
      {data === [] ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <>
          {data.map((user) => (
            <OutputContent>
              <img
                src={user.profileImage}
                alt="test"
                width="180px"
                height="180px"
              />
              <TextDiv>
                <Namebox key={user._id}>{user.name}</Namebox>
                <Univdiv>
                  <p key={user._id}>{user.university}</p>
                  <p key={user._id}>{user.major}</p>
                </Univdiv>
                <Descriptionbox key={user._id}>
                  {user.description}
                </Descriptionbox>
                <Link to={`/portfoliodetail/${user._id}`}>
                  <button>자세히 보기</button>
                </Link>
              </TextDiv>
            </OutputContent>
          ))}
        </>
      )}
    </Fade>
  );
}

export default OutputCard;
