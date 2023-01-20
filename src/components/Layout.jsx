import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <StWrap>
        <Outlet />
      </StWrap>
    </>
  );
};

export default Layout;

const StWrap = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-top: 150px; ;
`;
