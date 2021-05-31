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
    width: fit-content;
    font-family: 'Spoqa-Bold';
    font-size: 2em;
  }
`;

// 작성자 프로필로 이동하는 링크
const Writer = styled(Link)`
  margin-left: 40%;
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
    color: #ccc;
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

const testdata = {
  title: 'AI 창업 경진대회 참가자 모집',
  writer: '최민석',
  img: 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/73718a84cad942a7a120dc34cfb4bed3.jpg',
  category: '아이디어/기획',
  target: '제한 없음',
  host: '인공지능산업융합단',
  sponser: '정보 없음',
  period: '', // 접수 기간
  scale: '500만 원',
  homepage: '정보 없음',
  file: '설명.pdf',
};

const ContestDetailTitle = () => {
  return (
    <>
      <TitleBox>
        <h1>{testdata.title}</h1>
        {/* 나중에 링크처리할 부분 */}
        <Writer to="/portfoliodetail">작성자 {testdata.writer}</Writer>
        <Edit to="/contestedit">수정하기</Edit>
      </TitleBox>
      <Details>
        <DetailImg>
          <img src={testdata.img} alt="" />
        </DetailImg>
        <DetailText>
          <span>분야</span>
          <span>{testdata.category}</span>
          <span>응모 대상</span>
          <span>{testdata.target}</span>
          <span>주최/주관</span>
          <span>{testdata.host}</span>
          <span>후원/협찬</span>
          <span>{testdata.sponser}</span>
          <span>접수 기간</span>
          <span>2021-05-10 ~ 2021-05-28 3:00 오후</span>
          <span>지원 규모</span>
          <span>{testdata.scale}</span>
          <span>홈페이지</span>
          <span>{testdata.homepage}</span>
          <span>첨부 파일</span>
          <FileLink>
            <a href="">{testdata.file}</a>
          </FileLink>
        </DetailText>
      </Details>
    </>
  );
};

export default ContestDetailTitle;
