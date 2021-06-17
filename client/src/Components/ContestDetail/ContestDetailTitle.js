import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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
  const day = data.deadLine.substring(0, 10); // 마감 기한 날짜
  const time = data.deadLine.substring(11, 16); // 마감 기한 시간

  // 유저 이름 정보 불러오기
  const username = useSelector((state) => state.userInfo.userInfo.name);
  return (
    <>
      <TitleBox>
        <h1>{data.title}</h1>
        {/* 나중에 링크처리할 부분 */}
        <Writer to="/portfoliodetail">작성자 {data.author}</Writer>
        {/* 작성자와 username이 같다면 수정하기 버튼 보이기 */}
        {data.author === username ? (
          <Edit to="/contestedit">수정하기</Edit>
        ) : (
          <></>
        )}
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
          <span>모집 인원</span>
          <span>{data.totalMembers} 명</span>
          <span>마감 기한</span>
          <span>
            {day} {time}
          </span>
          <span>지원 규모</span>
          <span>{data.supportScale}</span>
          <span>홈페이지</span>
          <a href={data.homepage} target="_blank">
            {data.homepage}
          </a>
        </DetailText>
      </Details>
    </>
  );
};

export default ContestDetailTitle;
