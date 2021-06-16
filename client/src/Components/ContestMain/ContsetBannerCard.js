import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../Assets/Images/icon-rightarrow.svg';
import { PrimaryColor } from '../../Assets/Color/Color';

const BannerCardShortcut = styled(Link)`
  width: 100%;
  margin: 5px 0 15px 0;

  text-align: left;
  text-decoration: none;
  & > span {
    margin-right: 6px;
    font-family: 'Spoqa-Bold';
    color: ${PrimaryColor};
  }
`;

const BannerCardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
  & span {
    font-size: 0.7em;
  }
`;

const ContsetBannerCard = ({ data }) => {
  const deadLine = new Date(data.deadLine); // 설정된 데드라인
  const now = new Date(); // 현재 날짜
  const gap = now.getTime() - deadLine.getTime();
  const dday = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

  return (
    <>
      <BannerCardShortcut to={`/contests/detail/${data._id}`}>
        <span>Read More</span>
        <Arrow />
      </BannerCardShortcut>
      <img src={data.poster} alt="" />
      <span>
        {dday > 0 ? (
          <span className="dday">D-{dday}</span>
        ) : (
          <span className="close">모집 마감</span>
        )}
      </span>
      <span>{data.title}</span>
      <BannerCardBottom>
        <span>작성자 : {data.author}</span>
        <span>조회수 {data.hitCount}</span>
      </BannerCardBottom>
    </>
  );
};

export default ContsetBannerCard;
