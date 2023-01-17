import React from "react";

import SignLayout from "../../components/Layout/SignLayout";
import { StInput, StBtn, StBtnBox, StInputLabel } from "../../lib/signStyle";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <SignLayout>
      <h1>당근팔조</h1>
      <form>
        <StInputLabel>아이디</StInputLabel>
        <StInput size={50} type="text" />
        <StInputLabel>비밀번호</StInputLabel>
        <StInput size={100} type="password" />
        <StInputLabel>비밀번호확인</StInputLabel>
        <StInput size={50} type="password" />
        <StInputLabel>이메일</StInputLabel>
        <StInput size={50} type="text" />
        <StBtnBox>
          <StBtn
            variant="dark"
            onClick={() => {
              alert("회원가입이 완료되었습니다!");
              navigate("/");
            }}
          >
            취소
          </StBtn>
          <StBtn
            variant="dark"
            onClick={() => {
              navigate("/signin");
            }}
          >
            회원가입
          </StBtn>
        </StBtnBox>
      </form>
      <button
        onClick={() => {
          navigate("/Main");
        }}
      >
        메인으로 가기{" "}
      </button>
    </SignLayout>
  );
};

export default SignUp;
