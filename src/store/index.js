import { configureStore } from "@reduxjs/toolkit";
import walletSlice from "./walletSlice";
import tripSlice from "./tripSlice";

export const store = configureStore({
  reducer: {
    wallet: walletSlice.reducer,
    trip: tripSlice.reducer,
  },
});
