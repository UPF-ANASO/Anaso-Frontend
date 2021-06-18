import React from 'react';
import styled from 'styled-components';

import { PrimaryColor } from '../../Assets/Color/Color';

const TitleInput = styled.div`
  margin-bottom: 30px;
  & input {
    width: 100%;
    font-size: 1.5em;
    font-family: 'Spoqa-Bold';
    padding: 0.4rem;
    border: none;
  }
  & hr {
    height: 1px;
    color: #d0d0d0;
    border-color: #d0d0d0;
    background-color: #d0d0d0;
    border: none;
  }
`;

const ContestNameandDeadLineInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  & span {
    margin-right: 30px;
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
  & input {
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    border: none;
    border-bottom: 1px solid #ededed;
  }
  & input:first-of-type {
    width: 50%;
    margin-right: 30px;
  }
  & input:last-of-type {
    width: 205px;
  }
`;

const DetailInput = styled.div`
  display: flex;
  align-items: center;

  & span {
    margin-right: 30px;
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
  & span:last-of-type {
    margin: 0;
  }
  & input {
    width: 150px;
    margin-right: 15px;
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    border: none;
    border-bottom: 1px solid #ededed;
  }
  & input:first-of-type {
    width: 250px;
    margin-right: 50px;
  }
  & select {
    width: 160px;
    margin-right: 50px;
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    font-size: 0.8rem;
    border: none;
  }
`;

const HomepageandPoster = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  & span {
    margin-right: 30px;
    font-family: 'Spoqa-Medium';
    color: ${PrimaryColor};
  }
  & input {
    padding: 0.4rem;
    font-family: 'Spoqa-Medium';
    border: none;
    border-bottom: 1px solid #ededed;
  }
  & input:first-of-type {
    width: 50%;
    margin-right: 30px;
  }
  & input:last-of-type {
    width: 205px;
  }
`;

const ContestCreateInputs = ({
  onChangeField,
  title,
  category,
  contestName,
  deadLine,
  poster,
  organizer,
  totalMembers,
  homepage,
}) => {
  const onChangeInputs = (input, e) => {
    onChangeField({ key: input, value: e.target.value });
  };

  return (
    <>
      <TitleInput>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          onChange={(e) => onChangeInputs('title', e)}
          value={title}
        />
        <hr />
      </TitleInput>
      <ContestNameandDeadLineInput>
        <span>공모전 이름</span>
        <input
          type="text"
          onChange={(e) => onChangeInputs('contestName', e)}
          value={contestName}
        />
        <span>마감 기한</span>
        <input
          type="datetime-local"
          onChange={(e) => onChangeInputs('deadLine', e)}
          value={deadLine}
        />
      </ContestNameandDeadLineInput>
      <DetailInput>
        <span>분야</span>
        <select
          onChange={(e) => onChangeInputs('category', e)}
          value={category}
        >
          <option value="기획/아이디어">기획/아이디어</option>
          <option value="디자인/광고/마케팅">디자인/광고/마케팅</option>
          <option value="사진/영상">사진/영상</option>
          <option value="문학/수기/시나리오">문학/수기/시나리오</option>
          <option value="IT/소프트웨어">IT/소프트웨어</option>
        </select>
        <span>주최/주관</span>
        <input
          type="text"
          onChange={(e) => onChangeInputs('organizer', e)}
          value={organizer}
        />
        <span>모집 인원</span>
        <input
          type="number"
          onChange={(e) => onChangeInputs('totalMembers', e)}
          value={totalMembers}
        />
        <span>명</span>
      </DetailInput>
      <HomepageandPoster>
        <span>홈페이지</span>
        <input
          type="text"
          onChange={(e) => onChangeInputs('homepage', e)}
          value={homepage}
        />
        <span>대표 이미지</span>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => onChangeInputs('poster', e)}
          value={poster}
        />
      </HomepageandPoster>
    </>
  );
};

export default ContestCreateInputs;
