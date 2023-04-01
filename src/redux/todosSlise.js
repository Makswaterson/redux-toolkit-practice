import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',

  initialState: todosInitialState,

  reducers: {
    addTodos(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodos(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodos, deleteTodos } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const getAllTodos = state => state.todos;
