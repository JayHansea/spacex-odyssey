import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departureStation: "",
  destination: "",
  spacecraft: "",
  fare: 0,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setDepartureStation: (state, action) => {
      state.departureStation = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setSpacecraft: (state, action) => {
      state.spacecraft = action.payload;
    },
    setFare: (state, action) => {
      state.fare = action.payload;
    },
    resetTrip: (state) => {
      state.departureStation = "";
      state.destination = "";
      state.spacecraft = "";
      state.fare = 0;
    },
  },
});

export const tripActions = tripSlice.actions;

export default tripSlice;
