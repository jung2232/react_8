import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SignLayout from "../../components/Layout/SignLayout";

import { GoogleIcon, KakaoIcon } from "../../assets/icon/socialLogin";
import { StInput, StBtn, StBtnBox, StInputLabel } from "../../lib/signStyle";

import { axiosInstance } from "../../config/axiosInstance";

const SignIn = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  axiosInstance.get();

  const idPwHandler = ({ target: { value, name } }) => {
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  return (
    <SignLayout>
      <h1>Login</h1>
      <form>
        <StInputLabel>아이디</StInputLabel>
        <StInput
          value={login.username}
          type="text"
          name="username"
          placeholder="아이디를 입력해 주세요!"
          onChange={idPwHandler}
        />
        <StInputLabel>비밀번호</StInputLabel>
        <StInput
          value={login.password}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요!"
          onChange={idPwHandler}
        />
      </form>
      <StBtnBox>
        <StBtn
          variant="dark"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </StBtn>
        <StBtn
          variant="dark"
          onClick={() => {
            navigate("/main");
          }}
        >
          로그인
        </StBtn>
      </StBtnBox>
      <StSocialBtnBox>
        <StSocialBtn bgColor="white">
          <GoogleIcon style={{ position: "absolute", left: "16px" }} /> 구글로
          시작하기
        </StSocialBtn>
        <StSocialBtn bgColor="#FEE500">
          <KakaoIcon style={{ position: "absolute", left: "16px" }} />
          카카오로 시작하기
        </StSocialBtn>
      </StSocialBtnBox>
    </SignLayout>
  );
};

export default SignIn;

const StSocialBtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 20px;
`;

const StSocialBtn = styled.button`
  border: none;
  border-radius: 15px;
  position: relative;
  margin: 0 auto;
  width: 300px;
  height: 46px;
  padding: 0 12px;
  padding-left: 48px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;
