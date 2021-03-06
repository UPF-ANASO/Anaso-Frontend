import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PrimaryColor, BackgroundColor } from '../../Assets/Color/Color';

const CategoryPanel = styled.div`
  position: sticky;
  top: 71px;
  z-index: 99;

  width: 100%;
  height: 40px;
  padding: 10px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${BackgroundColor};
  background-color: rgba(256, 256, 256, 0.9);
`;

const CategoryLink = styled(Link)`
  position: relative;
  margin: 0 1rem;

  font-family: 'Spoqa-Light';
  text-decoration: none;
  color: black;
  &.active {
    font-family: 'Spoqa-Medium';

    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      width: 100%;
      height: 2px;

      background-color: ${PrimaryColor};
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 29px;
    width: 0;
    height: 2px;

    transform: translateX(-50%);
    transition: 0.2s width linear;

    background-color: ${PrimaryColor};
  }
  &:hover {
    font-family: 'Spoqa-Regular';

    &:after {
      width: 100%;
    }
  }
`;

const ContestCategory = () => {
  return (
    <CategoryPanel>
      <CategoryLink className="active">전체</CategoryLink>
      <CategoryLink>기획/아이디어</CategoryLink>
      <CategoryLink>디자인/광고/마케팅</CategoryLink>
      <CategoryLink>사진/영상</CategoryLink>
      <CategoryLink>문학/수기/시나리오</CategoryLink>
      <CategoryLink>IT/소프트웨어</CategoryLink>
    </CategoryPanel>
  );
};

export default ContestCategory;
