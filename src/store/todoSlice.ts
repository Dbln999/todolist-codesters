import { ITodo } from "../types/Todo.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todoState = {
  todos: ITodo[];
};

const initialState: todoState = {
  todos: [{ id: 0, completed: false, title: "Example" }],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
