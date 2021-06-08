import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../Assets/Images/logo-kr.svg';
import Header from '../../Components/common/Header';
import Input from '../../Components/Login/Input';
import Button from '../../Components/common/Button/Button';
import {
  PrimaryColor2,
  TextColorBlack,
  TextColorGray,
  TextColorWhite,
} from '../../Assets/Color/Color';
import { SignUpAPI } from '../../Api/User/user';
import Footer from '../../Components/Main/Footer';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  input {
    margin-bottom: 15px;
  }
`;

const LogoTitle = styled.h3`
  font-family: 'Spoqa-Light';
  color: ${TextColorGray};
  font-size: 0.7rem;
  margin-bottom: 30px;
  letter-spacing: 5px;
`;

const InputFile = styled.input`
  &[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const SelectImgBox = styled.button`
  width: 70%;
  min-width: 200px;
  min-height: 200px;
  border: 1px solid ${PrimaryColor2};
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: white;
  background: url(${(props) => props.Imgsrc}) no-repeat;
  background-size: cover;
  color: ${TextColorBlack};
  :hover {
    background-color: ${PrimaryColor2};
    color: ${TextColorWhite};
    transition: 0.3s;
  }
  span {
    position: relative;
    top: 0;
    left: 0;
    opacity: 0.5;
    font-size: 1rem;
    /* 미리보기 블럭 제거 및 추가 */
    display: ${(props) => (props.Imgsrc != '' ? 'none' : 'block')};
  }
`;

const Signup = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [major, SetMajor] = useState('');
  const [university, SetUniversity] = useState('');
  const [description, SetDescription] = useState('');

  const [imgURL, SetImgURL] = useState('');
  const [imgFile, SetImgFile] = useState(null);

  const ImgRef = useRef(null);

  const onChangeName = (e) => {
    SetName(e.target.value);
  };
  const onChangeEmail = (e) => {
    SetEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    SetPassword(e.target.value);
  };
  const onChangePhoneNumber = (e) => {
    SetPhoneNumber(e.target.value);
  };
  const onChangeMajor = (e) => {
    SetMajor(e.target.value);
  };
  const onChangeUniversity = (e) => {
    SetUniversity(e.target.value);
  };
  const onChangeDescription = (e) => {
    SetDescription(e.target.value);
  };

  const handleSelectImg = (e) => {
    e.preventDefault();
    ImgRef.current.click();
    console.log(imgURL);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    reader.onload = () => {
      const base = reader.result;
      if (base) {
        SetImgURL(base.toString());
      }
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      SetImgFile(e.target.files[0]);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('profileImage', imgFile);
    fd.append('phoneNumber', phoneNumber);
    fd.append('major', major);
    fd.append('university', university);
    fd.append('description', description);
    try {
      const response = await SignUpAPI(fd);
      console.log(response);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <Header />
      <MainContainer>
        {/* <Logo width={200} height={100} /> */}
        <LogoTitle>나를 표현하는 가장 쉬운 방법</LogoTitle>
        <InputFile
          ref={ImgRef}
          type="file"
          id="imgFile"
          accept="image/png, image/jpeg"
          onChange={handleChangeFile}
        />
        <SelectImgBox Imgsrc={imgURL} onClick={handleSelectImg}>
          <span>프로필 사진 추가하기</span>
        </SelectImgBox>
        <Input
          placeholder="이름을 입력해주세요."
          width="250px"
          type="text"
          onChange={onChangeName}
          fontsize="0.8rem"
        />
        <Input
          placeholder="이메일을 입력해주세요."
          width="250px"
          type="text"
          onChange={onChangeEmail}
          fontsize="0.8rem"
        />
        <Input
          placeholder="비밀번호를 입력해주세요. (5자 이상)"
          width="250px"
          type="password"
          onChange={onChangePassword}
          fontsize="0.8rem"
        />
        <Input
          placeholder="휴대폰번호를 입력해주세요."
          width="250px"
          type="text"
          onChange={onChangePhoneNumber}
          fontsize="0.8rem"
        />
        <Input
          placeholder="전공을 입력해주세요."
          width="250px"
          type="text"
          onChange={onChangeMajor}
          fontsize="0.8rem"
        />
        <Input
          placeholder="대학을 입력해주세요."
          width="250px"
          type="text"
          onChange={onChangeUniversity}
          fontsize="0.8rem"
        />
        <Input
          placeholder="본인 소개를 해주세요.(1줄)"
          width="250px"
          type="text"
          onChange={onChangeDescription}
          fontsize="0.8rem"
        />
        <Button text="회원가입" onClick={handleSignUp} width="250px" />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Signup;
