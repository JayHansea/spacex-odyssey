import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Trip from "../src/components/trip/Trip";
import { Provider } from "react-redux";
import { store } from "../src/store";

// Mocking the necessary dependencies
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-native-dropdown-select-list", () => ({
  SelectList: jest.fn(),
}));
jest.mock("@expo/vector-icons", () => ({
  Feather: "Feather",
}));

import { tripActions } from "../src/store/tripSlice";

describe("Trip Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    // Mocking the useSelector values
    const mockState = {
      trip: {
        departureStation: "",
        destination: "",
        spacecraft: "",
        fare: 0,
        isBookingSuccessModalVisible: false,
      },
      wallet: {
        walletBalance: 100,
      },
    };
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockReturnValueOnce(mockState);

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Trip />
      </Provider>
    );

    expect(getByText("Book a trip")).toBeTruthy();
    expect(getByPlaceholderText("Select Departure Station")).toBeTruthy();
    expect(getByPlaceholderText("Choose Destination")).toBeTruthy();
    expect(getByPlaceholderText("Select Desired Spacecraft")).toBeTruthy();
    expect(getByText("Fare: 0 btc")).toBeTruthy();
    expect(getByText("Book Trip")).toBeTruthy();
  });

  it("calculates trip fare correctly", () => {
    // Mocking the useSelector values
    const mockState = {
      trip: {
        departureStation: "abuja",
        destination: "spock",
        spacecraft: "F1",
        fare: 0,
        isBookingSuccessModalVisible: false,
      },
      wallet: {
        walletBalance: 100,
      },
    };
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockReturnValueOnce(mockState);

    const { getByText } = render(
      <Provider store={store}>
        <Trip />
      </Provider>
    );

    fireEvent.press(getByText("Book Trip"));

    expect(store.dispatch).toHaveBeenCalledWith(tripActions.setFare(250));
  });
});
