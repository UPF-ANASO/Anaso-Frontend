import React from 'react';
import styled from 'styled-components';

const MyIntroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  height: 25%;
  min-width: 200px;
  min-height: 20vh;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;

  /* background-color: #e4e4e4; */
`;

const MyPic = styled.div`
  width: 120px;
  height: 150px;
  border: 1px solid black;
`;

const AboutMe = styled.div`
  height: 150px;
  width: 120px;
  border: 1px solid black;
  /* background-color: aqua; */
`;

function MyIntro() {
  return (
    <MyIntroDiv>
      <MyPic>
        <img alt="사진 자리" />
      </MyPic>
      <AboutMe>
        <p>하밈미</p>
        <p>순천향대학교</p>
        <p>경영학과</p>
        <p>#열정 #끈기 #배고파</p>
      </AboutMe>
    </MyIntroDiv>
  );
}

export default MyIntro;
