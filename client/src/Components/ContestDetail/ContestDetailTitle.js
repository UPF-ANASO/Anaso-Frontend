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
  color: ${PrimaryColor};
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

const ContestDetailTitle = () => {
  return (
    <>
      <TitleBox>
        <h1>AI 창업 경진대회 참가자 모집</h1>
        {/* 나중에 링크처리할 부분 */}
        <Writer>작성자 최민석</Writer>
      </TitleBox>
      <Details>
        <DetailImg>
          <img
            src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/73718a84cad942a7a120dc34cfb4bed3.jpg"
            alt=""
          />
        </DetailImg>
        <DetailText>
          <span>분야</span>
          <span>아이디어/기획</span>
          <span>응모 대상</span>
          <span>제한 없음</span>
          <span>주최/주관</span>
          <span>인공지능산업융합사업단</span>
          <span>후원/협찬</span>
          <span>정보 없음</span>
          <span>접수 기간</span>
          <span>2021-05-10 ~ 2021-05-28 3:00 오후</span>
          <span>지원 규모</span>
          <span>500만 원</span>
          <span>홈페이지</span>
          <span>정보 없음</span>
          <span>첨부 파일</span>
          <span>설명.pdf</span>
        </DetailText>
      </Details>
    </>
  );
};

export default ContestDetailTitle;
