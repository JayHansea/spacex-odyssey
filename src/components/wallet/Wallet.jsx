import React from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import styles from "./Wallet.Style";
import { useDispatch, useSelector } from "react-redux";
import { walletActions } from "../../store/walletSlice";

const Wallet = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.wallet.isModalOpen);

  const renderModal = () => {
    dispatch(walletActions.openModal());
  };

  const closeModal = () => {
    dispatch(walletActions.closeModal());
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
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.walletInfo}>
        <Text style={styles.balance}>3000 btc</Text>
        <Ionicons name="eye-outline" size={24} color="white" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={renderModal}>
          <Text>Fund Account</Text>
        </Pressable>
      </View>
      {ModalComponent()}
    </View>
  );
};

export default Wallet;
