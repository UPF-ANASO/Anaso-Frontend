import React from 'react';
import styled from 'styled-components';
import {
  BackgroundColor,
  PrimaryColor,
  TextColorBlack,
} from '../../Assets/Color/Color';
import SearchIcon from '../../Assets/Images/icon-search.svg';
import SearchCheck from './SearchCheck';

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  justify-content: space-around;
  width: 30%;
  height: 80vh;
  img {
    position: absolute;
    top: 112px;
    left: 35px;
  }
  & > div:nth-child(2) {
    width: 90%;
    height: 80%;
    /* border: 1px solid black; */
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 10px;
  border-style: none;
  border-radius: 10px;
  padding-left: 50px;
  color: ${PrimaryColor};
  background-color: ${BackgroundColor};

  &:focus {
    transition: 0.2s;
    border-radius: 10px;
    outline: none;
    background-color: white;
    border: 1px solid ${PrimaryColor};
  }
`;

function Search() {
  return (
    <SearchDiv>
      <div>
        <img src={SearchIcon} width="20px" height="20px"></img>
        <Input placeholder="포트폴리오 검색" />
      </div>
      <div>
        <SearchCheck />
      </div>
    </SearchDiv>
  );
}

export default Search;
