import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todolist",
  initialState: {
    todos: ["Buy Groceries", "Learn Redux"],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
