import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../Assets/Images/icon-rightarrow.svg';

import { Link } from 'react-router-dom';

import { PrimaryColor } from '../../Assets/Color/Color';

const CardPanel = styled(Link)`
  width: 300px;
  height: 480px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  box-shadow: 0px 0px 20px rgba(57, 40, 166, 0.15);
  border-radius: 20px;
  text-decoration: none;
  color: black;
  & > img {
    width: 300px;
    height: 350px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const CardTitle = styled.div`
  width: 100%;
  margin: 15px 0 0 0;

  display: flex;
  justify-content: space-between;
  & > span {
    font-family: 'Spoqa-Bold';
    display: block;
  }
  & > span:first-of-type {
    width: 100%;
    padding-top: 4px;
    max-width: 220px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & > span:last-of-type {
    padding: 5px 8px;

    font-size: 0.8rem;

    border-radius: 10px;
    background-color: #f57168;
    color: white;
  }
  & > span.close {
    background-color: #b0b0b0;
  }
`;

const CardContent = styled.div`
  & > p {
    text-align: justify;
    font-size: 0.9em;
    margin: 20px 0;
  }
`;

const CardBottom = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: space-between;
  & > div {
    cursor: pointer;
  }
  & > div > span {
    margin-right: 6px;
    font-family: 'Spoqa-Bold';
    color: ${PrimaryColor};
  }
  & > span {
    font-size: 0.9em;
  }
`;

const ContestCard = ({ data }) => {
  const deadLine = new Date(data.deadLine); // 설정된 데드라인
  const now = new Date(); // 현재 날짜
  const gap = now.getTime() - deadLine.getTime();
  const dday = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

  return (
    <CardPanel to="/contestdetail">
      <img src={data.poster} alt="" />
      <CardTitle>
        <span>{data.title}</span>
        {dday > 0 ? (
          <span>D-{dday}</span>
        ) : (
          <span className="close">모집 마감</span>
        )}
      </CardTitle>
      <CardContent>
        <p>{data.detail}</p>
      </CardContent>
      <CardBottom>
        {/* 나중에 링크 처리해줘야 하는 곳 */}
        <div>
          <span>자세히 보기</span>
          <Arrow />
        </div>
        <span>조회수 {data.hitCount}</span>
      </CardBottom>
    </CardPanel>
  );
};

export default ContestCard;
