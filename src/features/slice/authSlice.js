import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getUserByToken } from "../thunks/authThunks";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // ================ Login =============
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.access;

        // token localStorage me save
        localStorage.setItem("token", action.payload.data.access);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      // ========== Get User by Token ========
      .addCase(getUserByToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // fresh profile after login to show in header
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
