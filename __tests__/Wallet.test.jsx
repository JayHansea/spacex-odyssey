import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Wallet from "../src/components/wallet/Wallet";
import { Provider } from "react-redux";
import { store } from "../src/store";

// Mocking the necessary dependencies
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
  SimpleLineIcons: "SimpleLineIcons",
  Feather: "Feather",
}));

import { walletActions } from "../src/store/walletSlice";

describe("Wallet Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    // Mocking the useSelector values
    const mockState = {
      wallet: {
        isModalOpen: false,
        fundingSuccess: false,
        walletBalance: 100,
        isAmountVisible: true,
      },
    };
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockReturnValueOnce(mockState);

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <Wallet />
      </Provider>
    );

    expect(getByText("***** btc")).toBeTruthy();
    expect(getByPlaceholderText("Enter Your Wallet Address")).toBeTruthy();
    expect(getByPlaceholderText("Enter BTC Amount")).toBeTruthy();
    expect(getByText("Fund Account")).toBeTruthy();
  });

  it("opens and closes modal correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Wallet />
      </Provider>
    );

    fireEvent.press(getByText("Fund Account"));
    expect(store.dispatch).toHaveBeenCalledWith(walletActions.openModal());

    fireEvent.press(getByText("Fund SpaceX Wallet"));
    expect(store.dispatch).toHaveBeenCalledWith(walletActions.fundWallet());

    fireEvent.press(getByText("arrow-down"));
    expect(store.dispatch).toHaveBeenCalledWith(walletActions.closeModal());
  });

  it("toggles amount visibility correctly", () => {
    // Mocking the useSelector values
    const mockState = {
      wallet: {
        isModalOpen: false,
        fundingSuccess: false,
        walletBalance: 100,
        isAmountVisible: true,
      },
    };
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockReturnValueOnce(mockState);

    const { getByText } = render(
      <Provider store={store}>
        <Wallet />
      </Provider>
    );

    fireEvent.press(getByText("eye-outline"));
    expect(store.dispatch).toHaveBeenCalledWith(
      walletActions.toggleAmountVisibility()
    );
  });
});
