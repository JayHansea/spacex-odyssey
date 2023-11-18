import { View, Text } from "react-native";
import React from "react";
import Wallet from "../../components/wallet/Wallet";
import Trip from "../../components/trip/Trip";
import styles from "./Home.Style";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.brandName}>SpaceX Odessey</Text>
      </View>
      <Wallet />
      <Trip />
    </View>
  );
};

export default Home;
