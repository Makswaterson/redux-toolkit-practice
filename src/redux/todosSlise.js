import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todos: [],
};

const todosSlice = createSlice({
  // Имя слайса
  name: 'todos',
  // Начальное состояние редюсера слайса
  initialState: todosInitialState,
  // Объект редюсеров
  reducers: {
    addTodos(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodos(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// Генераторы экшенов
export const { addTodos, deleteTodos } = todosSlice.actions;
// Редюсер слайса
export const todosReducer = todosSlice.reducer;

export const getAllTodos = state => state.todos;
