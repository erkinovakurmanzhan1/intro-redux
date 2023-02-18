import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { calculateSlice } from "./calculator/calculatorSlice";

export const store = configureStore({
  reducer: {
    calculator: calculateSlice.reducer,
    auth: authSlice.reducer,
  },
});
