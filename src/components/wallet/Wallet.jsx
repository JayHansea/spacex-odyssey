import React, { useState } from "react";
import { View, Text, Pressable, Modal, TextInput } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./Wallet.Style";
import { useDispatch, useSelector } from "react-redux";
import { walletActions } from "../../store/walletSlice";

const Wallet = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.wallet.isModalOpen);
  const fundingSuccess = useSelector((state) => state.wallet.fundingSuccess);
  const walletBalance = useSelector((state) => state.wallet.walletBalance);
  const isAmountVisible = useSelector((state) => state.wallet.isAmountVisible);

  const [walletAddress, setWalletAddress] = useState("");
  const [btcAmount, setBtcAmount] = useState("");

  const renderModal = () => {
    dispatch(walletActions.openModal());
  };

  const closeModal = () => {
    dispatch(walletActions.closeModal());
    setWalletAddress(""); // Reset wallet address
    setBtcAmount(""); // Reset BTC amount
  };

  const fundWallet = () => {
    dispatch(walletActions.fundWallet({ walletAddress, amount: +btcAmount }));
  };

  const toggleAmountVisibility = () => {
    dispatch(walletActions.toggleAmountVisibility());
  };

  const ModalComponent = () => {
    return (
      <Modal
        visible={isModalOpen}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalTransparentView}>
          <View style={styles.modalView}>
            <View style={styles.closeModalButton}>
              <Pressable onPress={closeModal}>
                <SimpleLineIcons name="arrow-down" size={24} color="black" />
              </Pressable>
            </View>
            <View style={styles.feedback}>
              {fundingSuccess && (
                <>
                  <Text style={styles.successMessage}>
                    Funding success, close modal and book a trip!
                  </Text>
                </>
              )}
            </View>
            <View style={styles.feedback}>
              {!fundingSuccess && btcAmount < 3000 && btcAmount !== "" && (
                <Text style={styles.errorMessage}>
                  Can only fund a minimum of 3000btc
                </Text>
              )}
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Wallet Address"
                value={walletAddress}
                onChangeText={setWalletAddress}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter BTC Amount"
                keyboardType="numeric"
                value={btcAmount}
                onChangeText={setBtcAmount}
              />
            </View>
            <View style={styles.buttonContainer()}>
              <Pressable style={styles.button} onPress={fundWallet}>
                <Text>Fund SpaceX Wallet</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.walletInfo}>
        <Text style={styles.balance}>
          {isAmountVisible ? walletBalance.toFixed(2) : "*****"} btc
        </Text>
        <Pressable onPress={toggleAmountVisibility}>
          <Ionicons
            name={isAmountVisible ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="white"
          />
        </Pressable>
      </View>
      <View style={styles.buttonContainer("flex-end")}>
        <Pressable
          style={[styles.button("40%"), styles.shadow]}
          onPress={renderModal}
        >
          <Text>Fund Account</Text>
        </Pressable>
      </View>
      {ModalComponent()}
    </View>
  );
};

export default Wallet;
