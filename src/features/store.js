import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";
import todoReducer from "./todos/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
