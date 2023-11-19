import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: "trip",
  initialState: {},
  reducers: {},
});

export const tripActions = tripSlice.actions;

export default tripSlice;
