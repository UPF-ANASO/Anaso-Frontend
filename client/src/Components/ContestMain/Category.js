import React from 'react';
import styled from 'styled-components';
import { NavLink, Router } from 'react-router-dom';
import '../../Assets/CSS/Font.css';

const CategoryPanel = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f2f2f2;
`;

const CategoryLink = styled.div`
  position: relative;
  font-family: 'Spoqa-Light';
  margin: 0 1rem;
  text-decoration: none;
  &.active {
    font-family: 'Spoqa-Medium';
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: #7edbb0;
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 29px;
    width: 0;
    height: 2px;
    background-color: #7edbb0;
    transition: 0.2s width linear;
  }
  &:hover {
    font-family: 'Spoqa-Medium';
    &:after {
      width: 100%;
    }
  }
`;

const Category = () => {
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

export default Category;
