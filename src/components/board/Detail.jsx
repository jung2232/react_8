import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getDetail } from "./../../redux/modules/detailSlice";
import { __updateDetail } from "../../redux/modules/detailSlice";
import CommentForm from "./../CommentForm";

const Detail = () => {
  const detail = useSelector((state) => state.detail.detail);
  const isLoading = useSelector((state) => state.detail.isLoading);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);

  // console.log(comments);
  // useEffect(() => {
  //   dispatch();
  // });

  // const [updateTitle, setUpdateTitie] = useState(detail.title);
  // const [updateDesc, setUpdateDesc] = useState(detail.desc);
  // const [updatePrice, setUpdatePrice] = useState(detail.price);
  const [updateTitle, setUpdateTitie] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updatePrice, setUpdatePrice] = useState(0);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!isLoading) {
      setUpdateTitie(detail.title);
      setUpdateDesc(detail.desc);
      setUpdatePrice(detail.price);
    }
  }, [isLoading, detail.desc, detail.title, detail.price]);

  const onUpdateHandler = () => {
    setIsEditMode(true);
  };

  const onSubmitHandler = () => {
    const detailData = {
      id: id, // === id,
      data: {
        title: updateTitle,
        description: updateDesc,
        price: updatePrice,
      },
    };
    dispatch(__updateDetail(detailData));
  };

  return (
    <Wrap>
      <div>
        <SbLogo>
          <Link to="/Main">당근팔조</Link>
        </SbLogo>
      </div>
      <button onClick={onUpdateHandler}>수정</button>
      <button onClick={onSubmitHandler}>확인</button>
      <SbWrap>
        <StImages>{detail.img}</StImages>
        {!isEditMode ? (
          <>
            <StUser>
              <div>
                <p>{detail.title}</p>
              </div>
              <div>
                <p>{detail.desc}</p>
              </div>
              <div>
                <p>가격:{detail.price}</p>
              </div>
            </StUser>
          </>
        ) : (
          <>
            <StUser>
              <div>
                <input
                  type="text"
                  value={updateTitle}
                  onChange={(e) => {
                    setUpdateTitie(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={updateDesc}
                  onChange={(e) => {
                    setUpdateDesc(e.target.value);
                  }}
                />
              </div>
              <div>
                <NmInput
                  type="number"
                  value={updatePrice}
                  onChange={(e) => {
                    setUpdatePrice(e.target.value);
                  }}
                />
              </div>
            </StUser>
          </>
        )}
      </SbWrap>
      <CommentForm />
    </Wrap>
  );
};

export default Detail;

const NmInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Wrap = styled.div`
  position: relative;
`;
const StUser = styled.div`
  width: 500px;
  height: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const SbWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: #000;
  margin-top: 40px;
`;
const SbLogo = styled.div`
  font-size: 30px;
  color: #000;
  margin: 40px;
`;

const StImages = styled.div`
  margin: 20px;
  display: flex;
  justify-items: center;
  align-items: center;
`;
