import { View, Text, ScrollView } from "react-native";
import React from "react";
import Wallet from "../../components/wallet/Wallet";
import Trip from "../../components/trip/Trip";
import styles from "./Home.Style";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.brandName}>SpaceX Odessey</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <Wallet />
        <Trip />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
