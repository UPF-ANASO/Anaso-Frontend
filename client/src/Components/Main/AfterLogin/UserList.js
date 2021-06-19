import React from 'react';

const UserList = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        Portfolio.map((dt) => (
          <CardForm>
            <UserImg src={dt.Profile} alt="프로필 사진" />
            <CardName>{dt.name}</CardName>
            <CardName>{dt.major}</CardName>
          </CardForm>
        ))}
    </>
  );
};

export default UserList;
