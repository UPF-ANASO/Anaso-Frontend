import React from 'react';
import styled from 'styled-components';
import {
  BackgroundColor,
  PrimaryColor,
  TextColorBlack,
} from '../../Assets/Color/Color';

const SearchCheckDiv = styled.div`
  height: 80%;
  & > div {
    height: 50%;
  }

  & > div > p {
    margin-bottom: 20px;
  }

  & > div > span {
    display: inline-block;
    margin-bottom: 8px;
  }

  & > div + div {
    margin-top: 20px;
  }
`;

const SortTitle = styled.p`
  font-size: 1.1rem;
  font-family: 'Spoqa-Regular';
  color: ${PrimaryColor};
`;

function SearchCheck() {
  return (
    <SearchCheckDiv>
      <div>
        <SortTitle>정렬 기준</SortTitle>
        <input type="checkbox" />
        <span>기본 정렬</span>
        <br />
        <input type="checkbox" />
        <span>프로젝트 완료 수</span>
        <br />
        <input type="checkbox" />
        <span>최근 활동 순</span>
        <br />
        <input type="checkbox" />
        <span>평점 순</span>
        <br />
      </div>
      <div>
        <SortTitle>참여 분야</SortTitle>
        <input type="checkbox" />
        <span>전체</span>
        <br />
        <input type="checkbox" />
        <span>기획</span>
        <br />
        <input type="checkbox" />
        <span>디자인</span>
        <br />
        <input type="checkbox" />
        <span>개발</span>
      </div>
    </SearchCheckDiv>
  );
}

export default SearchCheck;
