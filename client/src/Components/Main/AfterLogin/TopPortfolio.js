import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MainUserAPI } from '../../../Api/Main/main';
import { PrimaryColor, TextColorGray } from '../../../Assets/Color/Color';
import Test from '../../../Assets/Images/test.jpeg';
const Container = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: space-around;
`;

const CardForm = styled.div`
  width: 175px;
  height: 200px;
`;

const UserImg = styled.img`
  width: 175px;
  height: 200px;
  object-fit: cover;
  border: 1px solid #e1e1e1;
  border-radius: 15px;
  margin-right: 25px;
  box-shadow: 1px 2px 3px #e1e1e1;
  margin-bottom: 5px;
`;

const CardName = styled.p`
  font-size: 0.7rem;
  font-family: 'Spoqa-Light';
  margin-bottom: 5px;
  &#title {
    font-size: 1rem;
    color: ${TextColorGray};
    text-align: left;
    font-family: 'Spoqa-Regular';
  }

  &#major {
    font-size: 0.6rem;
    color: ${TextColorGray};
  }
`;

const CardRows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const TopPortfolio = () => {
  const [Portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await MainUserAPI();
        setPortfolio(response.data.portfolios.slice(0, 5));
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPortfolioData();
  }, []);

  return (
    <Container>
      {Portfolio.length > 0 &&
        Portfolio.map((dt) => (
          <CardForm>
            <UserImg src={dt.profileImage} alt="프로필 사진" />
            <CardName id="title">{dt.description}</CardName>
            <CardRows>
              <CardName>{dt.name}</CardName>
              <CardName id="major">{dt.major}</CardName>
            </CardRows>
          </CardForm>
        ))}
    </Container>
  );
};

export default TopPortfolio;
