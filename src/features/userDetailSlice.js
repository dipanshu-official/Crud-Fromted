import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create a user
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${API_URL}/users`, data); // POST request to create user
      return response.data; // this becomes action.payload
    } catch (error) {
      return rejectWithValue(error.response.data || "Something went wrong");
    }
  }
);

// Slice to handle user state
export const userDetail = createSlice({
  name: "dipanshu",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.push(action.payload); // append new user
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userDetail.reducer;
