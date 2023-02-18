import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    logout() {
      return initialState;
    },
  },
});


export const authActions = authSlice.actions;
