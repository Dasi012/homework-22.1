import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todo/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import { useNavigate } from "react-router";

export const Todo = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const navigate = useNavigate(-1);

  const nav = () => {
    navigate(-1);
  };

  const [todoTitle, setTodoTitle] = useState("");

  const [todoId, setTodoId] = useState(null);

  const deleteHandler = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };
  const completetHandler = (id) => {
    dispatch(todoActions.completed(id));
  };

  const editTodoHandler = ({ id, title }) => {
    setTodoId(id);
    setTodoTitle(title);
  };

  const saveHandler = (id) => {
    dispatch(todoActions.editTodoHandler({ id, todoTitle }));
    setTodoId(null);
    setTodoTitle("");
  };


  return todos?.map((item) =>
    item.id === todoId ? (
      <>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
    
            style={{ marginRight: "10px" ,     borderRadius: "5px",  }}
        />
        <button
          onClick={() => saveHandler(item.id)}
          style={{
            marginRight: "10px",
            backgroundColor: "green",
            color: "white",
            borderRadius: "10px",

          }}
        >
          Save
        </button>
        <button
          onClick={() => setTodoId(null)}
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "10px",

          }}
        >
          Cancel
        </button>
      </>
    ) : (
      <div key={item.id} style={{ marginBottom: "10px" }}>
        <p style={{ textDecoration: item.completed ? "line-through" : null }}>
          {item.title}
        </p>
        <Button onClick={() => deleteHandler(item.id)}>
          <DeleteIcon />
        </Button>
        <Button onClick={() => completetHandler(item.id)}>
          <DonutLargeRoundedIcon />
        </Button>
        <button
          onClick={() => editTodoHandler({ id: item.id, title: item.title })}
          style={{
            marginRight: "10px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Edit
        </button>
        <button
          onClick={nav}
          style={{
            backgroundColor: "orange",
            color: "white",
            borderRadius: "10px",
          }}
        >
          Go Back
        </button>
      </div>
    )
  );
};
