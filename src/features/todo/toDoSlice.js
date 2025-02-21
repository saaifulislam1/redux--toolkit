import { createSlice, nanoid } from "@reduxjs/toolkit";
// declare an intial state

const initialState = { todos: [{ id: 1, text: "Hello world" }] };

// A "slice" represents a piece of the overall application state, along with the reducers and actions that modify it.
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // action is the data/parameter recieved from somewhere
    // this state actually refers to initialState
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      console.log("clicked");
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log("removed");
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
