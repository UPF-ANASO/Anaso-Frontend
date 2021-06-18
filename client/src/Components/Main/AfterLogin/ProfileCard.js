import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
const Container = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageBox = styled.img`
  width: 150px;
  height: 150px;
`;

const UserName = styled.h3`
  height: 50px;
  line-height: 50px;
  font-size: 1rem;
  font-family: 'Spoqa-Light';
  text-align: left;
  strong {
    font-family: 'Spoqa-Regular';
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileCard = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  return (
    <Container>
      <ImageBox src="" alt="프로필사진" />
      <UserName>
        어서오세요. <strong>{userInfo.name}</strong>님
      </UserName>
      <ButtonContainer>
        <Button text={'포트폴리오'} width={'100px'} height={'30px'} />
        <Button text={'내 정보'} width={'100px'} height={'30px'} />
      </ButtonContainer>
    </Container>
  );
};

export default ProfileCard;
