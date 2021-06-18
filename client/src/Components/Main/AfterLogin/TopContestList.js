import React, { useState, useEffect } from 'react';
import { ContestListAPI } from '../../../Api/Contest/Contest';
import styled from 'styled-components';
import Test from '../../../Assets/Images/test.jpeg';
const Container = styled.div`
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  width: 230px;
  height: 300px;
  border: 1px solid #e4e4e4;
`;

const CardImg = styled.img`
  width: 230px;
  height: 230px;
  border-bottom: 1px solid #e4e4e4;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TopContestList = () => {
  const [ContestList, setContestList] = useState([]);

  useEffect(() => {
    const fetchContestDatas = async () => {
      try {
        const response = (await ContestListAPI()).data;
        response.sort((a, b) => b.hitCount - a.hitCount).splice(4);
        setContestList(response);
        console.log(response);
      } catch (e) {
        alert(e);
      }
    };
    fetchContestDatas();
  }, []);

  return (
    <Container>
      {ContestList.length > 0 &&
        ContestList.map((data) => (
          <CardContainer>
            <CardImg src={data.poster} />
            <CardTitle>{data.contestName}</CardTitle>
          </CardContainer>
        ))}
    </Container>
  );
};

export default TopContestList;
