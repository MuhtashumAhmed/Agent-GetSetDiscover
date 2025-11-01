import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios";
import ENDPOINTS from "../../api/endpoints";

// Login thunk
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
    //   const res = await axiosInstance.post("/user_management/signin/", credentials);
      const res = await axiosInstance.post(ENDPOINTS.AUTH.LOGIN, credentials);

      if (!res.data.status) {
        return rejectWithValue(res.data.message || "Invalid credentials");
      }

      // ✅ pehle token save, phir immediately profile fetch
      localStorage.setItem("token", res.data.data.access);
      dispatch(getUserByToken());

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

//  Get user by token thunk
export const getUserByToken = createAsyncThunk(
  "auth/getUserByToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return rejectWithValue("No token found");

    //   const res = await axiosInstance.get("/user_management/get_user_by_token/", {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
      const res = await axiosInstance.get(ENDPOINTS.AUTH.GET_USER, {
        headers: { Authorization: `Bearer ${token}` },
      });



      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch user");
    }
  }
);
