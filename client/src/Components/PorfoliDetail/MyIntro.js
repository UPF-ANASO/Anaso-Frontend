import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';

const MyIntroDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 28%;
  height: 30%;
  min-width: 250px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
`;

const MyPic = styled.div`
  width: 120px;
  height: 150px;
  /* border: 1px solid black; */
`;

const AboutMe = styled.div`
  height: 150px;
  width: 120px;
  /* border: 1px solid black; */
  /* background-color: aqua; */
  & > p:nth-child(1) {
    font-size: 1.3rem;
    font-family: 'Spoqa-Medium';
  }
`;

function MyIntro() {
  return (
    <MyIntroDiv>
      <MyPic>
        <img src={Test} width="140px" height="150px" alt="사진 자리" />
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
