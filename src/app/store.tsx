import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../components/boardSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
});
