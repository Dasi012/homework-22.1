import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    completed(state, action) {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, completed: !el.completed } : el
      );
    },
    editTodoHandler(state, action) {
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.todoTitle }
          : item
      );
    },
  },
});

export const todoActions = todoSlice.actions;
