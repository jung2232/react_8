import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../redux/modules/boardSlice";
import Card from "./Card";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.board.boardList);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("Authorization");
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      setSearchParams("");
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    dispatch(__getBoardList());
  }, [dispatch]);

  return (
    <div>
      <StHeader>
        <StLogo>당근팔조</StLogo>
        <SbHeader>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            글쓰기
          </button>
          <button>로그아웃</button>
          <h4>닉네임님 환영합니다!</h4>
        </SbHeader>
      </StHeader>
      <p size="18">물품이 없네요!</p>
      {boardList?.map((board) => (
        <Card key={board.id} board={board} />
      ))}
    </div>
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
