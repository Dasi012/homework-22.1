import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ActionTypeAuth } from "../store/loginSlice";

const LoginPage = () => {
  const auth = useSelector((state) => state.auth.auth);
  console.log("auth: ", auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(ActionTypeAuth.login());
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />

        <Button type="submit" disabled={!formIsValid}>
          Login
        </Button>
      </Form>

      {auth ? navigate("/homepage") : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  padding: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007bff")};
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default LoginPage;
