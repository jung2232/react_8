import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <StHeader>
        <StLogo>당근팔조</StLogo>
        <SbHeader>
          <button
            onClick={() => {
              navigate("/upload");
            }}
          >
            글쓰기
          </button>
          <button>로그아웃</button>
          <h4>닉네임님 환영합니다!</h4>
        </SbHeader>
      </StHeader>
      <StBox>
        <SbBox
          onClick={() => {
            navigate("/detail");
          }}
        >
          <div>이미지</div>
          <p>내용</p>
          <p>가격</p>
          <button>삭제</button>
        </SbBox>
      </StBox>
    </>
  );
};

export default Main;

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SbHeader = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
`;

const StBox = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 100px;
  margin: 60px;
`;

const SbBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border: 1px #ccc solid;
  text-align: center;
  padding-top: 150px;
`;

const StLogo = styled.h2`
  margin: 20px;
`;
