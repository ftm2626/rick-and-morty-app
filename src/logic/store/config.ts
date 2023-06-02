import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./listSlice";
import { AppSlice } from "./appSlice";

export const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    app: AppSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
