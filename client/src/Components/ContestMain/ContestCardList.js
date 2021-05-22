import React from 'react';
import ContestCard from './ContestCard';
import styled from 'styled-components';

import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';

const CardListPanel = styled.div`
  width: 100%;
  margin: 3% 0 10% 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33%, auto));
  grid-gap: 3% 0;
  justify-items: center;
`;

const ButtonsPanel = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const FilterButtonsPanel = styled.div`
  & button:first-of-type {
    margin-right: 10px;
  }
`;

// 테스트용 데이터
const testdata = [
  {
    id: 1,
    img: 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg',
    title: '2021 위핏 UX∙마케팅 아이디어 공모전',
    dday: 3,
    content:
      '고려대학교에서 주최하는 대학생 언택트 서비스를 주제로 해커톤을 진행합니다.',
    hits: 1,
  },
  {
    id: 2,
    img: 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg',
    title: '2021 위핏 UX∙마케팅 아이디어 공모전',
    dday: 3,
    content:
      '고려대학교에서 주최하는 대학생 언택트 서비스를 주제로 해커톤을 진행합니다.',
    hits: 1,
  },
  {
    id: 3,
    img: 'https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/post_photos/2021/05/14/7f607877ec4844b3a4e22afd20c3cfb8.jpg',
    title: '2021 위핏 UX∙마케팅 아이디어 공모전',
    dday: 3,
    content:
      '고려대학교에서 주최하는 대학생 언택트 서비스를 주제로 해커톤을 진행합니다.',
    hits: 1,
  },
];

const ContestCardList = () => {
  return (
    <>
      <ButtonsPanel>
        <FilterButtonsPanel>
          <Button width="80px" text="마감기한 순" />
          <Button width="100px" text="조회수 높은 순" color="#7d7d7d" />
        </FilterButtonsPanel>
        <Link to="/contestcreate">
          <Button width="80px" text="새 글 쓰기" />
        </Link>
      </ButtonsPanel>
      <CardListPanel>
        {testdata.map((data) => (
          <ContestCard data={data} key={data.id} />
        ))}
      </CardListPanel>
    </>
  );
};

export default ContestCardList;
