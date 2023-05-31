import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  result: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputNumber: (state, action) => {
      state.input += action.payload;
    },
    add: (state) => {
      state.result += parseFloat(state.input);
      state.input = "";
    },
    calculate: (state) => {
      state.result = eval(state.input);
    },
    reset: (state) => {
      state.input = "";
    },
    resetAll: () => {
      return initialState;
    },
  },
});

export const AcitonTypeCalculator = calculatorSlice.actions;
