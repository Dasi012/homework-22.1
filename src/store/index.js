import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todo/todoSlice";
import { calculatorSlice } from "./calculator/calculatorSlice";
import { authSlice } from "./loginSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [calculatorSlice.name]: calculatorSlice.reducer,
  },
});
