import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetCharacterQuery } from "__generated__/graphql";
import { RootState } from "./config";

const initialState: { list: GetCharacterQuery["character"][] } = {
  list: [],
};

export const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    AddToList: (
      state,
      action: PayloadAction<GetCharacterQuery["character"]>
    ) => {
      const exists = state.list.findIndex(({ id }) => id == action.payload.id);
      if (exists < 0) state.list = [...state.list, action.payload];
    },
    RemoveFromList: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
    DeleteList: (state) => {
      state.list = [];
    },
  },
});

export const { AddToList, RemoveFromList, DeleteList } = listSlice.actions;