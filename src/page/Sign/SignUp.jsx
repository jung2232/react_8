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

  const [msg, setMsg] = useState("");

  const [isCheck, setIsCheck] = useState(true);

  const userInfoHandler = ({ target: { value, name } }) => {
    setUserInfo((prev) => ({ ...prev, [name]: value.trim() }));
  };

  console.log(userInfo);

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!isCheck) {
      return;
    }
    const result = await userApis.signUpUser(userInfo);
    console.log(result);
  };

  return (
    <SignLayout>
      <h1>당근팔조</h1>
      <StForm onSubmit={signUpHandler}>
        <StInputLabel>아이디</StInputLabel>
        <StInputBox>
          <StInput
            value={userInfo.username}
            type="text"
            name="username"
            onChange={userInfoHandler}
          />
          <StBtn>중복확인</StBtn>
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
        />
        <StInputLabel>비밀번호확인</StInputLabel>
        <StInput
          type="password"
          name="passwordCheck"
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
          <StBtn disabled={!isCheck}>회원가입</StBtn>
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
