import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h3`
  font-size: 2rem;
  text-align: left;
  font-family: 'Spoqa-Regular';
  margin-bottom: 30px;
`;

const ContentText = styled.p`
  font-size: 1rem;
  text-align: left;
  font-family: 'Spoqa-Light';
`;

const BannerContent = ({ titleText, contentText }) => {
  return (
    <Container>
      <TitleText>{titleText}</TitleText>
      <ContentText>{contentText}</ContentText>
    </Container>
  );
};

export default BannerContent;
