import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PrimaryColor } from '../../Assets/Color/Color';

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  & h1 {
    display: inline-block;
    width: 80%;
    font-family: 'Spoqa-Bold';
    font-size: 2em;
  }
`;

// 작성자 프로필로 이동하는 링크
const Writer = styled(Link)`
  font-family: 'Spoqa-Medium';
  text-decoration: none;
  color: black;

  transition: all 0.3s;
  &:hover {
    color: #ccc;
  }
`;

const Edit = styled(Link)`
  margin-left: 10px;
  font-family: 'Spoqa-Light';
  text-decoration: none;
  color: black;

  transition: all 0.3s;
  &:hover {
    color: #ccc;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailImg = styled.div`
  margin-right: 50px;
  img {
    width: 300px;
    height: 380px;
    object-fit: cover;
  }
`;

const DetailText = styled.div`
  width: 70%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  border-top: 1px solid #d0d0d0;
  border-bottom: 1px solid #d0d0d0;

  span {
    margin-bottom: 10px;
  }
  span:nth-of-type(odd) {
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
  span:last-of-type {
    margin: 0;
  }
`;

const FileLink = styled.span`
  & a {
    text-decoration: none;
    color: black;
    transition: all 0.3s;
  }
  & a:hover {
    text-decoration: underline;
    color: #ccc;
  }
`;

const ContestDetailTitle = ({ data }) => {
  return (
    <>
      <TitleBox>
        <h1>{data.title}</h1>
        {/* 나중에 링크처리할 부분 */}
        <Writer to="/portfoliodetail">작성자 {data.author}</Writer>
        <Edit to="/contestedit">수정하기</Edit>
      </TitleBox>
      <Details>
        <DetailImg>
          <img src={data.poster} alt="" />
        </DetailImg>
        <DetailText>
          <span>분야</span>
          <span>{data.category}</span>
          <span>주최/주관</span>
          <span>{data.organizer}</span>
          <span>후원/협찬</span>
          <span>어쩌고</span>
          <span>마감 기한</span>
          <span>2021-05-28 3:00 오후</span>
          <span>지원 규모</span>
          <span>500만 원</span>
          <span>홈페이지</span>
          <span>https://www.naver.com/</span>
        </DetailText>
      </Details>
    </>
  );
};

export default ContestDetailTitle;
