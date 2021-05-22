import React from 'react';
import styled from 'styled-components';
import { ShadowColor, TextColorGray } from '../../Assets/Color/Color';
import Test from '../../Assets/Images/Test.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 2.5%; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(200, 243, 218, 0.3);
  box-shadow: 1px 1px 3px ${ShadowColor};
`;

const ImgSession = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const InfoSession = styled.div`
  width: 85%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
`;

const Profile_Session = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
`;
const Profile_name = styled.span`
  font-size: 0.8rem;
  font-family: 'Spoqa-Regular';
`;
const Profile_info = styled.span`
  font-size: 0.3rem;
  font-family: 'Spoqa-Light';
  color: ${TextColorGray};
`;
const Hash_info = styled.div`
  display: flex;
`;
const Hash_tag = styled.span`
  font-size: 0.7rem;
  & + & {
    margin-left: 10px;
  }
`;

const Profile = () => {
  return (
    <Container>
      <ImgSession>
        <img src={Test} />
      </ImgSession>
      <InfoSession>
        <Profile_Session>
          <Profile_name>최민석</Profile_name>
          <Profile_info>순천향대학교 소프트웨어공학과</Profile_info>
        </Profile_Session>
        <Hash_info>
          <Hash_tag>#열정</Hash_tag>
          <Hash_tag>#노력</Hash_tag>
          <Hash_tag>#긍정</Hash_tag>
        </Hash_info>
      </InfoSession>
    </Container>
  );
};

export default Profile;
