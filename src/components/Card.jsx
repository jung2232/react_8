import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteDetailList } from "./../redux/modules/boardSlice";
const Card = ({ board }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("물품을 지울까요?")) {
      dispatch(__deleteDetailList(board.id));
    }
  };

  return (
    <StWrap>
      <StBox>
        <SbBox
          key={board.id}
          onClick={() => {
            navigate(`/${board.id}`);
          }}
        >
          <div>{board.image}</div>
          <p>{board.title}</p>
          <p>{board.price}</p>
          <button onClick={(e) => onDeleteHandler(e)}>삭제</button>
        </SbBox>
      </StBox>
    </StWrap>
  );
};

export default Card;
const StWrap = styled.div`
  display: flex;
  justify-items: left;
`;
const StBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  gap: 100px;
  margin: 60px;
  cursor: pointer;
`;

const SbBox = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  border: 1px #ccc solid;
  text-align: center;
  padding-top: 150px;
`;
