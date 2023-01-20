import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import SignLayout from "../../components/Layout/SignLayout";
import {
  StInput,
  StBtn,
  StBtnBox,
  StInputLabel,
  StForm,
  StMsgP,
} from "../../lib/signStyle";

import { userApis } from "../../apis/userApis";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    passwordCheck: "",
    email: "",
  });

  const [isUserNameCheck, setIsUserNameCheck] = useState(true);

  const userInfoHandler = ({ target: { value, name } }) => {
    setUserInfo((prev) => ({ ...prev, [name]: value.trim() }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!isUserNameCheck) {
      alert("아이디 중복 체크를 해주세요!");
      return;
    }
    if (!userInfo.password === userInfo.passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 같지 않습니다!");
      return;
    }

    const result = await userApis.signUpUser(userInfo);
    if (result.data === "success") {
      navigate("/");
    } else {
      alert("예기치 못한 오류가 발생하였습니다!");
      window.location.reload();
    }
  };

  const checkUserId = async () => {
    let regex = new RegExp("[a-z]{4,8}");
    if (!regex.test(userInfo.username)) {
      return alert("형식에 맞춰 써주세요!");
    }
    const result = await userApis.checkUserId({
      username: userInfo.username,
    });

    if (result.data) {
      alert("아이디가 중복되었습니다!");
    } else {
      setIsUserNameCheck(true);
      alert("사용 가능한 아이디 입니다!");
    }
  };

  return (
    <SignLayout>
      <h1>당근팔조</h1>
      <StForm onSubmit={signUpHandler}>
        <StInputLabel>아이디</StInputLabel>
        <StInputBox>
          <StInput
            value={userInfo.username}
            maxLength="8"
            minLength="4"
            required
            type="text"
            name="username"
            onChange={userInfoHandler}
            placeholder="소문자 4 - 8자를 입력해주세요!"
          />
          <StBtn type="button" onClick={checkUserId}>
            중복확인
          </StBtn>
        </StInputBox>
        <StInputLabel>비밀번호</StInputLabel>
        <StInput
          value={userInfo.password}
          type="password"
          name="password"
          onChange={userInfoHandler}
          onBlur={() => {
            if (userInfo.password === userInfo.passwordCheck) {
              return;
            }
            userInfo.passwordCheck &&
              alert("비밀번호 확인과 일치하지 않습니다!");
          }}
          required
          minLength="8"
          maxLength="15"
          placeholder="8 - 15자를 입력해 주세요!"
        />
        <StMsgP></StMsgP>
        <StInputLabel>비밀번호확인</StInputLabel>
        <StInput
          type="password"
          name="passwordCheck"
          required
          maxLength="15"
          minLength="8"
          placeholder="비밀번호와 똑같이 입력해주세요!"
          value={userInfo.passwordCheck}
          onChange={userInfoHandler}
          onBlur={() => {
            if (userInfo.password === userInfo.passwordCheck) {
              return;
            }
            alert("비밀번호와 일치하지 않습니다!");
          }}
        />
        <StInputLabel>이메일</StInputLabel>
        <StInput
          type="text"
          name="email"
          required
          onChange={userInfoHandler}
          onBlur={({ target: { value } }) => {
            if (value.trim() === "") {
              return;
            }
            let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
            if (regex.test(value)) {
              return;
            }
            alert("이메일 형식에 맞게 작성해주세요!");
          }}
          value={userInfo.email}
        />
        <StBtnBox>
          <StBtn
            type="button"
            variant="dark"
            onClick={() => {
              navigate(-1);
            }}
          >
            취소
          </StBtn>
          <StBtn>회원가입</StBtn>
        </StBtnBox>
      </StForm>

      <StGoMain
        onClick={() => {
          navigate("/Main");
        }}
      >
        메인으로 가기{" "}
      </StGoMain>
    </SignLayout>
  );
};

export default SignUp;

const StInputBox = styled.div`
  display: flex;
  column-gap: 10px;
  input {
    flex: 2;
  }
  button {
    flex: 1;
    justify-content: center;
    height: 30px;
  }
`;

const StGoMain = styled(StBtn)`
  width: 100%;
  margin-top: 30px;
`;
