import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./config";

const initialState: { theme: "light" | "dark" } = {
  theme: "light",
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    ChangeTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export const { ChangeTheme } = AppSlice.actions;
