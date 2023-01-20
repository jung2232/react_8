import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardList } from "../redux/modules/boardSlice";
import Card from "./Card";
import styled from "styled-components";

const Main = () => {
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

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(__getBoardList());
  }, [dispatch]);

  return (
    <>
      {boardList?.length === 0 && <p size="18">물품이 없네요!</p>}
      <StBoardList>
        {boardList?.map((board) => (
          <Card key={board.id} board={board} />
        ))}
      </StBoardList>
    </>
  );
};

export default Main;

const StBoardList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 3%;
  padding-bottom: 3rem;
  row-gap: 2.5rem;
  li {
    width: 31.333%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
    }
    & > div {
      padding: 30px;
    }
    & > div > div {
      margin-bottom: 15px;
    }
    h1 {
      margin-bottom: 10px;
    }
    p {
      margin-top: 5px;
    }
    button {
      margin-top: 20px;
      border: none;
      background: none;
      width: 100px;
      padding: 8px 0;
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 15px;
    }
  }
`;
