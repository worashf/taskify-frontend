import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth.service";

export const signupThunk = createAsyncThunk("auth/signup", async (user) => {
  try {
    return await authService.signup(user).data;
  } catch (error) {
    throw new Error(error);
  }
});

export const loginThunk = createAsyncThunk("/auth/login", async () => {
  try {
    return await authService.login().data;
  } catch (error) {
    throw new Error(error);
  }
});

export const authenticateThunk = createAsyncThunk(
  "auth/authenticate",
  async () => {
    try {
      return await authService.authenticate().data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout().data;
  } catch (erro) {
    throw new Error(error);
  }
});
