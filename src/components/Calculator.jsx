import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { AcitonTypeCalculator } from "../store/calculator/calculatorSlice";
import { useNavigate } from "react-router";

export const Calculator = () => {
  const { input } = useSelector((state) => state.calculator);
  const { result } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleInputNumber = (value) => {
    dispatch(AcitonTypeCalculator.inputNumber(value));
  };

  const handleCalculate = () => {
    dispatch(AcitonTypeCalculator.calculate());
  };

  const handleReset = () => {
    dispatch(AcitonTypeCalculator.reset());
  };

  const navigate = useNavigate(-1);

  const nav = () => {
    navigate(-1);
  };

  const resetAllHandler = () => dispatch(AcitonTypeCalculator.resetAll());
  return (
    <>
      <Container>
        <h2>Calculator</h2>
        <Input type="text" value={input} readOnly />
        <Button onClick={() => handleInputNumber("1")}>1</Button>
        <Button onClick={() => handleInputNumber("2")}>2</Button>
        <Button onClick={() => handleInputNumber("3")}>3</Button>
        <Button onClick={() => handleInputNumber("4")}>4</Button>
        <Button onClick={() => handleInputNumber("5")}>5</Button>
        <Button onClick={() => handleInputNumber("6")}>6</Button>
        <Button onClick={() => handleInputNumber("7")}>7</Button>
        <Button onClick={() => handleInputNumber("8")}>8</Button>
        <Button onClick={() => handleInputNumber("9")}>9</Button>
        <Button onClick={() => handleInputNumber("0")}>0</Button>
        <Button onClick={() => handleInputNumber("+")}>+</Button>
        <Button onClick={() => handleInputNumber("*")}>*</Button>
        <Button onClick={() => handleInputNumber("/")}>/</Button>
        <Button onClick={() => handleInputNumber("-")}>-</Button>
        <Button
          onClick={() => {
            handleCalculate();
            handleReset();
          }}
        >
          =
        </Button>
        <Button onClick={resetAllHandler}>C</Button>
        <Result>Result: {result}</Result>
      </Container>
      <button
        onClick={nav}
        style={{
          backgroundColor: "orange",
          color: "white",
          borderRadius: "10px",
          marginTop:'20px'
        }}
      >
        Go Back
      </button>
    </>
  );
};

const Container = styled.div`
  width: 220px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0;
  }
`;

const Result = styled.h2`
  margin-top: 10px;
`;
