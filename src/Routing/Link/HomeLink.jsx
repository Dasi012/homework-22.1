import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeLink = () => {
  console.log("HomePage: ");
  return (
    <Container>
      <StyledLink to="/todo">Todo</StyledLink>
      <StyledLink to="/calculator">Calculator</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 1535px;
  height: 120px;
background-color: aqua;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 16px;
  padding: 8px 12px;
  border: 1px solid #000;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  background-color: antiquewhite;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
