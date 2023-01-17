import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <StBox>
        <StInnerBox>
          <h1>당근팔조</h1>
          <form>
            <Sbfont>아이디</Sbfont>
            <StInput size={50} type="text" />
            <Sbfont>비밀번호</Sbfont>
            <StNumber size={100} type="number" />
            <Sbfont>비밀번호확인</Sbfont>
            <StNumber size={50} type="number" />
            <Sbfont>이메일</Sbfont>
            <StInput size={50} type="text" />
            <Stbutton>
              <Button
                variant="dark"
                onClick={() => {
                  alert("회원가입이 완료되었습니다!");
                  navigate("/");
                }}
              >
                취소
              </Button>
              <Button
                variant="dark"
                onClick={() => {
                  navigate("/login");
                }}
              >
                회원가입
              </Button>
            </Stbutton>
          </form>
          <button
            onClick={() => {
              navigate("/Main");
            }}
          >
            메인으로 가기{" "}
          </button>
        </StInnerBox>
      </StBox>
    </>
  );
};

export default SignUp;

// 박스전체
const StBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffa500;
`;
// 중앙정렬
const StInnerBox = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// 버튼
const Stbutton = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: end;
  padding: 10p;
`;

const StNumber = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  width: 385px;
  height: 40px;
`;

const StInput = styled.input`
  height: 40px;
`;

const Sbfont = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;
