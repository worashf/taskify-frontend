import { createSlice } from "@reduxjs/toolkit";
const authInitialState = {
  isAuthenticated: false,
  user: {},
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: {},
});
