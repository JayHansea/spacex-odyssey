import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    isModalOpen: false,
    walletBalance: 0, // Initial wallet balance
    fundingSuccess: false,
    minimumFundingAmount: 3000,
    isAmountVisible: true,
  },
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
    },
    closeModal(state, action) {
      state.isModalOpen = false;
      state.fundingSuccess = false;
    },
    fundWallet(state, action) {
      const { walletAddress, amount } = action.payload;

      if (amount >= state.minimumFundingAmount) {
        state.walletBalance += amount;
        state.fundingSuccess = true;
      } else {
        state.fundingSuccess = false;
      }
    },
    toggleAmountVisibility(state, action) {
      state.isAmountVisible = !state.isAmountVisible;
    },
    deductFromWallet(state, action) {
      const amount = action.payload;
      state.walletBalance -= amount;
    },
  },
});

export const walletActions = walletSlice.actions;

export default walletSlice;
