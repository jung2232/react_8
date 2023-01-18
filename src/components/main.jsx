import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __addTodos } from "./../redux/modules/todoSlice";
import Card from "./Card";

const Main = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todo, error } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(__addTodos());
  }, [dispatch]);

  if (todo.length === 0)
    return (
      <div>
        <StHeader>
          <StLogo>당근팔조</StLogo>
          <SbHeader>
            <button
              onClick={() => {
                navigate("/Upload");
              }}
            >
              글쓰기
            </button>
            <button>로그아웃</button>
            <h4>닉네임님 환영합니다!</h4>
          </SbHeader>
        </StHeader>
        <p size="18">물품이 없네요!</p>
      </div>
    );
  if (error) return <div>알수 없는 에러가 발생했습니다.</div>;
  return (
    <>
      <StHeader>
        <StLogo>당근팔조</StLogo>
        <SbHeader>
          <button
            onClick={() => {
              navigate("/Upload");
            }}
          >
            글쓰기
          </button>
          <button>로그아웃</button>
          <h4>닉네임님 환영합니다!</h4>
        </SbHeader>
      </StHeader>
      {todo?.map((todos) => (
        <Card todos={todos} key={todos.id} />
      ))}
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

const StLogo = styled.h2`
  margin: 20px;
  text
`;
