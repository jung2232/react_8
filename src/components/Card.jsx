import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteDetailList } from "./../redux/modules/boardSlice";


const Card = ({ board }) => {
  
  const { img, desc, id, porice, title } = board;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const onDeleteHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("물품을 지울까요?")) {
       dispatch(__deleteDetailList(board.id));
    }
  };
  const AddComma = (num) => {
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ",");
  };

  return (
    <StBox>
      <SbBox
        key={board.id}
        onClick={() => {
          navigate(`/${board.id}`);
        }}
      >
        <div>
          <img src={img} alt="판매상품" />
        </div>
        <h1>{board.title}</h1>
        <p>{board.desc}</p>
        <p>{AddComma(board.price)}원</p>
        <button onClick={(e) => onDeleteHandler(e)}>삭제</button>
      </SbBox>
    </StBox>
  );
};

export default Card;

const StBox = styled.li`
  cursor: pointer;
`;

const SbBox = styled.div``;
