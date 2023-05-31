import { Button, TextField, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todo/todoSlice";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const data = {
      id: Date.now(),
      title: input,
    };
    dispatch(todoActions.addTodo(data));
    setInput("");
  };
  return (
    <form onSubmit={addTodo}>
      <StyledInput
        type="text"
        size="small"
        value={input}
        onChange={inputChangeHandler}
      />
      <StyledButton
        type="submit"
        variant="contained"
        size="large"
        disabled={!input}
      >
        Add
      </StyledButton>
    </form>
  );
};

const StyledButton = styled(Button)(() => ({
  backgroundColor: "blue",
  color: "yellow",
}));

const StyledInput = styled(TextField)(() => ({}));
