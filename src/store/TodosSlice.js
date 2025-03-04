import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/api/todos");
    const data = await response.json();
    return data;
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (newTodo) => {
    const response = await fetch("http://127.0.0.1:8000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    return data.post;
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return id;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, updatedTodo }) => {
    const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });
    const data = await response.json();
    return data.post;
  }
);



const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      return state.map(todo => (
        todo.id === action.payload.id ? action.payload : todo
      ))
    })
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;