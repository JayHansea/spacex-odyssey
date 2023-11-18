import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Wallet.Style";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.walletInfo}>
        <Text style={styles.balance}>3000 btc</Text>
        <Ionicons name="eye-outline" size={24} color="white" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text>Fund Account</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Wallet;
