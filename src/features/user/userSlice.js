import axios from "axios"; // Correct import of Axios
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Async thunk action creator
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Failed to fetch users");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message; // Correctly set the error message
      });
  },
});

export default userSlice.reducer;
