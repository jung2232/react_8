import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../redux/modules/todoSlice";

const Card = ({ todos }) => {
  console.log(todos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("물품을 지울까요?")) {
      dispatch(__deleteTodoThunk(todos.id));
    }
  };

  return (
    <>
      <StBox>
        <SbBox
          key={todos.id}
          onClick={() => {
            navigate("/detail");
          }}
        >
          <div>이미지</div>
          <p>{todos.name}</p>
          <p>{todos.price}</p>
          <button onClick={(e) => onDeleteHandler(e)}>삭제</button>
        </SbBox>
      </StBox>
    </>
  );
};

export default Card;

const StBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
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
