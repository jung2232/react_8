import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <StHeader>
      <Nav />
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  background: white;
  box-shadow: 0 1px 3px -1px rgb(0 0 0 / 0.5);
`;
