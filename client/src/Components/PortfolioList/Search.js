import React from 'react';
import styled from 'styled-components';
import {
  BackgroundColor,
  PrimaryColor,
  TextColorBlack,
} from '../../Assets/Color/Color';

const SearchDiv = styled.div`
  width: 30%;
  height: 80vh;
  /* border: 1px solid black; */
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  margin-top: 10px;
  border-style: none;
  border-radius: 5px;
  padding: 5px;
  color: ${PrimaryColor};
  background-color: ${BackgroundColor};
`;

function Search() {
  return (
    <SearchDiv>
      <Input placeholder="포트폴리오 검색" />
    </SearchDiv>
  );
}

export default Search;
