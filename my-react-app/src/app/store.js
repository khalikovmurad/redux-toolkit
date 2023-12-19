import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../features/todoReducer";

export const store = configureStore({
    reducer: todosReducer
})