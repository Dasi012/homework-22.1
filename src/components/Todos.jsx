import React from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

const Todos = () => {
  return (
    <div>
      <TodoForm />
      <Todo />
    </div>
  );
};

export default Todos;
