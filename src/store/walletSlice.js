import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isModalOpen: false,
  },
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
    },
    closeModal(state, action) {
      state.isModalOpen = false;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
