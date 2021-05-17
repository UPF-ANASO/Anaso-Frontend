import React from 'react';
import styled from 'styled-components';
import Test from '../../Assets/Images/test.jpeg';

const MyIntroDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25%;
  height: 30%;
  min-width: 250px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px #e4e4e4;
`;

const MyPic = styled.div`
  width: 150px;
  height: 180px;
  /* border: 1px solid black; */
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 150px;
  width: 140px;
  /* border: 1px solid black; */
  /* background-color: aqua; */
  & > div:nth-child(1) p {
    font-size: 1.3rem;
    font-family: 'Spoqa-Regular';
  }

  & > div:nth-child(2) p:nth-child(3) {
    margin-top: 10px;
    font-size: 0.8rem;
  }
`;

function MyIntro() {
  return (
    <MyIntroDiv>
      <MyPic>
        <img src={Test} width="150px" height="180px" alt="사진 자리" />
      </MyPic>
      <AboutMe>
        <div>
          <p>하밈미</p>
        </div>
        <div>
          <p>순천향대학교</p>
          <p>경영학과</p>
          <p>#열정 #끈기 #배고파</p>
        </div>
      </AboutMe>
    </MyIntroDiv>
  );
}

export default MyIntro;
